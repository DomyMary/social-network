import {catchError, map, Observable, throwError} from "rxjs";
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";


;

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router:Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token'); // Sostituisci con il tuo token effettivo


    // Clona la richiesta e aggiungi un'intestazione di autorizzazione con il token
    const modifiedRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });

    // Passa la richiesta modificata al gestore successivo
    return next.handle(modifiedRequest).pipe(
      catchError( (err:HttpErrorResponse) =>{
        if( err.status==401){
          localStorage.clear();
          $('.modal-backdrop').remove();
          this.router.navigate([''])

        } else if( err.status==403){
          this.router.navigate(['403'])
        }


        return throwError(err)
      })
    )
  }
}
