import {Component, Input, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {Comment} from "../../../shared/types/comment";
import {CommandService} from "../../../shared/services/command.service";
import {Observable, Subscription} from "rxjs";
import {RequestService} from "../../../shared/services/request.service";
import {Post} from "../../../shared/types/post";

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit, OnDestroy {
  @Input() commenti: Array<Comment> = new Array<Comment>();
  @Input() postId: number = 0;
  post: Post = Post.getPostObj()
  sub: Subscription = new Subscription();

  constructor(private commandService: CommandService, private requestService: RequestService) {
  }


  ngOnInit() {
    this.commenti;
    this.sub = this.commandService.subject.subscribe(() => {
      this.ngOnInit();
    })
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

getComment(){

}
}
