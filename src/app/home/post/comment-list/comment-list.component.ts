import {Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output} from '@angular/core';
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
export class CommentListComponent implements OnInit{
  @Input() commenti: Array<Comment> = new Array<Comment>();
  @Input() postId: number = 0;
  @Output() newItemEvent = new EventEmitter<number>;


  addnewItem(value:number){
    console.log("ciaooo")
    this.newItemEvent.emit(value);


  }



  constructor(private commandService: CommandService, private requestService: RequestService) {
  }


  ngOnInit() {
    this.commenti;

  }

}
