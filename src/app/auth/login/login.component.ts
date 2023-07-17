import {Component, OnInit} from '@angular/core';
import {RequestService} from "../../shared/services/request.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {elementAt} from "rxjs";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  alert:boolean=false;
  err:boolean=false;
  state:boolean=false
  buttonSignin: boolean = false;
  loginform: FormGroup=new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });
  get username() { return this.loginform.get('username'); }

  get password() { return this.loginform.get('password'); }
  constructor(private requestService: RequestService, private router: Router) {
  }

  login() {
    this.buttonSignin=true;
    this.state=false;
    this.err=false;
    const body = {username: this.loginform.value.username, password: this.loginform.value.password};
      this.requestService.post('login', body).subscribe((res: any) => {
      // 1 Leggo la risposta ricevuta dal server
      console.log(res);
      // TODO: Creare SessionService per la gestione del LocalStorage (salvataggio e recupero)
      // Setto all'interno del localStorage il token che abbiamo ricevuto
      localStorage.setItem('token', res.access_token);
      localStorage.setItem('username', this.loginform.value.username);

    }, (error) => {
      console.error(error);
      if(error.status==503){
        this.state=true  //Da verificare
      }else if (this.loginform.value.username != null || this.loginform.value.password != null) {
          this.err=true;
        }

        this.buttonSignin=false
        this.alert=true;
      // 2 La chiamata è andata in errore e di conseguenza bisognerebbe notificare l'utente
    }, () => {
      // 3 La chiamata è stata completata con successo (SENZA ERRORI) e si può procedere con il login
      this.router.navigate(['home'])
    });
  }


  showPasssword () {
    let password= document.getElementById("floatingPassword");
    let eye=document.getElementById("eye")
    if(password!.getAttribute('type')==='password'){
      password!.setAttribute('type', 'text');
      eye!.classList.remove("bi-eye-fill");
      eye!.classList.add("bi-eye-slash-fill");
    } else{
      password!.setAttribute('type', 'password');
      eye!.classList.remove("bi-eye-slash-fill");
      eye!.classList.add("bi-eye-fill");
    }
  }


  protected readonly elementAt = elementAt;
}
