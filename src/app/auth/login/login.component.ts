import {Component} from '@angular/core';
import {RequestService} from "../../shared/services/request.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private requestService: RequestService, private router: Router) {
  }

  login() {
    const body = {username: 'Domenica', password: 'ciao'};
      this.requestService.post('login', body).subscribe((res: any) => {
      // 1 Leggo la risposta ricevuta dal server
      console.log(res);
    }, (error) => {
      console.error(error);
      // 2 La chiamata è andata in errore e di conseguenza bisognerebbe notificare l'utente
    }, () => {
      // 3 La chiamata è stata completata con successo (SENZA ERRORI) e si può procedere con il login
      this.router.navigate(['home'])
    });
  }




}
