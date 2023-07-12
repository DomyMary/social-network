import {Component, Input, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {Comment} from "../../../shared/types/comment";
import {CommandService} from "../../../shared/services/command.service";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit, OnDestroy{
  @Input() commenti: Array<Comment>= new Array<Comment>();
  @Input() postId: number=0;

  sub:Subscription = new Subscription();

  constructor(private commandService: CommandService) {
  }



  ngOnInit() {

   this.sub = this.commandService.subject.subscribe(value => {
     this.commenti.push(value);
   })
 }
 ngOnDestroy() {
   this.sub?.unsubscribe();
 }


}
