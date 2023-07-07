import {Component, OnInit} from '@angular/core';
import {RequestService} from "../../shared/services/request.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  alert: boolean = false;
  buttonSignUp: boolean = false;
  registrazioneSucc: boolean = false
  err:boolean=false;
  registerform: FormGroup = new FormGroup({
    firstname: new FormControl(null),
    lastname: new FormControl(null),
    username: new FormControl(null, Validators.required),
    city: new FormControl(null),
    state: new FormControl(null),
    genre: new FormControl('m'),
    dataOfBirth: new FormControl(null),
    password: new FormControl(null, Validators.required),
    conditions: new FormControl(null)


  })


  get username() {
    return this.registerform.get('username');
  }

  get password() {
    return this.registerform.get('password');
  }

  get conditions() {
    return this.registerform.get('conditions');
  }

  constructor(private requestService: RequestService) {
  }


  register() {
    // disabilito buttonSignup
    this.buttonSignUp = true
    this.requestService.post('register', {
      username: this.registerform.value.username,
      password: this.registerform.value.password
    }).subscribe((res: any) => {
        console.log(res);
      }, (error) => {
        console.error(error);
        if (this.registerform.value.username != null || this.registerform.value.password != null) {
          this.err=true;
        }
        this.alert = true;
        this.buttonSignUp = false //non disabilito
        this.registrazioneSucc = false
      }, () => {
        // 3 La chiamata è stata completata con successo (SENZA ERRORI) e si può procedere con il login
        this.buttonSignUp = false //non disabilito
        this.registrazioneSucc = true;
        this.alert = false;
        this.err=false;
      }
    );
  }

  close() {
    window.location.reload();
  }
}
