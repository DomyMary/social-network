import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RequestService} from "../../../shared/services/request.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-create-new-post',
  templateUrl: './create-new-post.component.html',
  styleUrls: ['./create-new-post.component.css']
})
export class CreateNewPostComponent {
  buttonSave: boolean = false;
  alert: boolean = false;
  err: boolean = false
  modal = document.getElementById("exampleModal3")
  createNewPost: FormGroup = new FormGroup({
    descrizione: new FormControl(null, Validators.required)
  })

  get descrizione() {
    return this.createNewPost.get('descrizione');
  }

  constructor(private requestService: RequestService, private router: Router) {

  }

  create() {
    this.buttonSave = true;
    const newPost = {text: this.createNewPost.value.descrizione}
    this.requestService.post('posts', newPost).subscribe((res: any) => {
      console.log(res);
    }, (err) => {
      console.log(err);
      if (this.createNewPost.value.descrizione != null) {
        this.err = true;
      } else{
        this.alert = true
      }
      this.buttonSave = false
      // La richiesta è andata in errore
    }, () => {
      // La richiesta è stata completata con successo
      this.closeModal();

    });
  }

  closeModal() {
    $("#exampleModal3").modal('toggle');
    $('.modal-backdrop').remove();
    window.location.reload()
  }

}
