import {Component, OnInit} from '@angular/core';
import {RequestService} from "../../shared/services/request.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginform: FormGroup=new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });

  constructor(private requestService: RequestService, private router: Router) {
  }


  login() {
    const body = {username: this.loginform.value.username, password: this.loginform.value.password};
      this.requestService.post('login', body).subscribe((res: any) => {
      // 1 Leggo la risposta ricevuta dal server
      console.log(res);
      // TODO: Creare SessionService per la gestione del LocalStorage (salvataggio e recupero)
      // Setto all'interno del localStorage il token che abbiamo ricevuto
      localStorage.setItem('token', res.access_token);
      localStorage.setItem('username', this.loginform.value.username)
    }, (error) => {
      console.error(error);
      alert("username o password sbagliata")
      // 2 La chiamata è andata in errore e di conseguenza bisognerebbe notificare l'utente
    }, () => {
      // 3 La chiamata è stata completata con successo (SENZA ERRORI) e si può procedere con il login
      this.router.navigate(['home'])
    });
  }






}
