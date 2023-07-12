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
  buttonSaveComment:boolean=false
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
    this.buttonSaveComment=true;
    const body= {text: this.newCommentform.value.commento, post_id:this.postId}
    this.requestService.post("comments", body).subscribe((res:any)=>{
      this.com=res;
      console.log(res)
    }, (err) => {
      console.log(err)
      if(err.error.detail[0].msg=="none is not an allowed value"){
        this.text=true;
      }
      this.buttonSaveComment=false
    }, ()=>{
      this.commandService.subject.next(this.com);
      // TODO: Emittiamo verso il componente padre che il commento è stato creato con successo (ci troviamo nel completo)
     this.buttonSaveComment=false
      this.text=false;
    })
  }

}
