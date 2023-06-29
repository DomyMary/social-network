import {Component, Input, OnInit} from '@angular/core';
import {Comment} from "../../../shared/types/comment";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit{
  @Input() commenti: Array<Comment>= new Array<Comment>();

 ngOnInit() {
   console.log(this.commenti)
 }

  constructor() {
  }

}
