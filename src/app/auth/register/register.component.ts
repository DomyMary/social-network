import { Component } from '@angular/core';
import {RequestService} from "../../shared/services/request.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerform:FormGroup= new FormGroup( {
    firstname: new FormControl(null),
    lastname:new FormControl(null),
    username:new FormControl(null, Validators.required),
    city:new  FormControl(null),
    state: new FormControl(null),
    genre:new FormControl('m'),
    dataOfBirth: new FormControl(null),
    password: new FormControl(null, Validators.required),
    conditions: new FormControl(null,Validators.required)


  })

  constructor(private requestService: RequestService) {
  }



  register() {
    this.requestService.post('register', {username: this.registerform.value.username, password: this.registerform.value.password}).subscribe((res: any) => {
      console.log(res);
    }, (error) => {
        console.error(error);
      },() => {
        // 3 La chiamata è stata completata con successo (SENZA ERRORI) e si può procedere con il login
        alert("La registrazione è avvenuta con successo")
      }
    );
  }
}
