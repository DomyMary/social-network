import {Component, Input} from '@angular/core';
import {RequestService} from "../../../shared/services/request.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-new-comment',
  templateUrl: './create-new-comment.component.html',
  styleUrls: ['./create-new-comment.component.css']
})
export class CreateNewCommentComponent {
  @Input() postId: number =0;
  newCommentform=new FormGroup({
    commento: new FormControl(null, Validators.required)


  })

  constructor( private requestService: RequestService) {
  }

  createComment(){
    const body= {text: this.newCommentform.value.commento, post_id:this.postId}
    this.requestService.post("comments", body).subscribe((res:any)=>{
      console.log(res)
    }, (err) => {
      console.log(err)
    }, ()=>{
      alert("il commento è stato creato con successo")

    })
  }

}
