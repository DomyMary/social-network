import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RequestService} from "../../../shared/services/request.service";

@Component({
  selector: 'app-create-new-post',
  templateUrl: './create-new-post.component.html',
  styleUrls: ['./create-new-post.component.css']
})
export class CreateNewPostComponent {
  createNewPost : FormGroup= new FormGroup({
    descrizione: new FormControl(null, Validators.required)
  })

  constructor( private requestService: RequestService) {

  }

  create(){
    const newPost = {text: this.createNewPost.value.descrizione}
    this.requestService.post('posts', newPost).subscribe((res: any) => {
      console.log(res);
    }, (err) => {
      // La richiesta è andata in errore
    }, () => {
      // La richiesta è stata completata con successo
      alert("Il post è stato creato con successo")
    });
  }


}
