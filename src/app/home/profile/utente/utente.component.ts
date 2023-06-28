import {Component, Input} from '@angular/core';
import {RequestService} from "../../../shared/services/request.service";
import {Users} from "../../../shared/types/users";

@Component({
  selector: 'app-utente',
  templateUrl: './utente.component.html',
  styleUrls: ['./utente.component.css']
})
export class UtenteComponent {
  // @Input() username: string;
  // users=new Array<Users>()

  // constructor( private requestService: RequestService) {

  // }

  // getUsers(){
  //   this.requestService.get("users").subscribe((res:any)=>{
  //     console.log(res);
  //     this.users=res;
  //   }, (error)=>{
  //     console.log(error)
  //   },()=>{
  //
  //   })
  // }


}
