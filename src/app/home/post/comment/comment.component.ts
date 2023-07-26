import {Component, Input, OnInit} from '@angular/core';
import {Comment} from "../../../shared/types/comment";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit{
  @Input() comment:Comment = new Comment(0,"",0,0);
  username=""
constructor() {
}
ngOnInit() {
    this.getUsername()
}

  getUsername() {
    const c = localStorage?.getItem("friends")
    let friends = JSON.parse(c || '{}')
    for (let i = 0; i < friends.length; i++) {
      if (friends[i].id == this.comment.user_id) {
        this.username = friends[i].username
      }
    }
  }

}
