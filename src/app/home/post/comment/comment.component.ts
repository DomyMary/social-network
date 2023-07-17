import {Component, Input} from '@angular/core';
import {Comment} from "../../../shared/types/comment";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  @Input() comment:Comment = new Comment(0,"",0,0);

}
