import {Component, EventEmitter, Input, Output} from '@angular/core';
import {RequestService} from "../../../shared/services/request.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-create-new-comment',
  templateUrl: './create-new-comment.component.html',
  styleUrls: ['./create-new-comment.component.css']
})
export class CreateNewCommentComponent {
  @Input() postId: number = 0;
  @Output() newItemEvent = new EventEmitter<number>;
  buttonSaveComment: boolean = false
  text: boolean = false;
  error: boolean = false;


  addnewItem(value: number) {
    this.newItemEvent.emit(value);

  }

  newCommentform = new FormGroup({
    commento: new FormControl(null, Validators.required)


  })

  get commento() {
    return this.newCommentform.get('commento');
  }

  constructor(private requestService: RequestService) {
  }

  createComment() {
    this.error = false
    this.buttonSaveComment = true;
    const body = {text: this.newCommentform.value.commento, post_id: this.postId}
    this.requestService.post("comments", body).subscribe((res: any) => {
      console.log(res)

    }, (err) => {
      console.log(err)
      this.buttonSaveComment = false
      if (err.error.detail[0].msg == "none is not an allowed value") {
        this.text = true;
      } else {
        this.error = true
      }

    }, () => {
      this.addnewItem(this.postId);
      this.error = false
      this.buttonSaveComment = false
      this.text = false;
    })
  }

}
