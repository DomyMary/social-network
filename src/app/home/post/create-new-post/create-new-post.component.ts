import {Component, DoCheck, Input, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RequestService} from "../../../shared/services/request.service";
import {Router} from "@angular/router";



@Component({
  selector: 'app-create-new-post',
  templateUrl: './create-new-post.component.html',
  styleUrls: ['./create-new-post.component.css']
})
export class CreateNewPostComponent{
  buttonSave: boolean = false;
  alert: boolean = false;
  err: boolean = false
  textError:string="";
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
    this.textError=""
    this.buttonSave = true;
    const newPost = {text: this.createNewPost.value.descrizione}
    this.requestService.post('posts', newPost).subscribe((res: any) => {
      console.log(res);
    }, (err) => {
      console.log(err);
      console.log(err.status)
      if (this.createNewPost.value.descrizione != null) {
        this.err = true;
      } else{
        this.alert = true
        this.textError=err.error.detail[0].msg;
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

  chiusura(){
    this.textError=""
    this.alert=false;
    this.err=false;
  }
}
