import { Component } from '@angular/core';
import {RequestService} from "../../shared/services/request.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private requestService: RequestService) {
  }



  register() {
    this.requestService.post('register', {username: 'Domenica', password: 'Domenica'}).subscribe((res: any) => {
      console.log(res);
    });
  }
}
