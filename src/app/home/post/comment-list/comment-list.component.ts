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
  commenti: Array<Comment> = new Array<Comment>();
  @Input() postId: number = 0;
  loading: boolean = false;
 post:Post=Post.getPostObj()
  sub: Subscription = new Subscription();

  constructor(private commandService: CommandService, private requestService: RequestService) {
  }


  getCommet() {
    this.loading = true;
    return this.requestService.get("posts/" + this.postId).subscribe((res: any) => {
      // 1 Leggo la risposta ricevuta dal server
      this.commenti = res.comments
      // TODO: Doppia sort check:    FATTO :)
    }, (error) => {
      console.error(error);
      this.loading = false;
      // 2 La chiamata è andata in errore e di conseguenza bisognerebbe notificare l'utente
    }, () => {
      // 3 La chiamata è stata completata con successo (SENZA ERRORI)
      this.loading = false;
    });

  }

  ngOnInit() {
    this.getCommet();
    this.sub = this.commandService.subject.subscribe(value => {
      this.commenti.push(value);
    })
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }


}
