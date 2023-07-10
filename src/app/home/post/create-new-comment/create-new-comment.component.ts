import {Component, Input} from '@angular/core';
import {RequestService} from "../../../shared/services/request.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Comment} from "../../../shared/types/comment";
import {CommandService} from "../../../shared/services/command.service";


@Component({
  selector: 'app-create-new-comment',
  templateUrl: './create-new-comment.component.html',
  styleUrls: ['./create-new-comment.component.css']
})
export class CreateNewCommentComponent {
  @Input() postId: number =0;
  text:boolean=false;
  com!:Comment;
  newCommentform=new FormGroup({
    commento: new FormControl(null, Validators.required)


  })

  get commento() {
    return this.newCommentform.get('commento');
  }
  constructor( private requestService: RequestService, private commandService: CommandService) {
  }

  createComment(){
    let button=document.getElementById("buttonSaveComment");
    button!.classList.add("disabled")
    const body= {text: this.newCommentform.value.commento, post_id:this.postId}
    this.requestService.post("comments", body).subscribe((res:any)=>{
      this.com=res;
      console.log(res)
    }, (err) => {
      console.log(err)
      this.text=true;
      button!.classList.remove("disabled")
    }, ()=>{
      this.commandService.subject.next(this.com);
      button!.classList.remove("disabled")
      this.text=false;
    })
  }

}
