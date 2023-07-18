import {Component, DoCheck, OnInit} from '@angular/core';
import {RequestService} from "../../../shared/services/request.service";
import {Post} from "../../../shared/types/post";




@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts = new Array<Post>();
  loading: boolean = true;
  errore:boolean=false;

  constructor(private requestService: RequestService) {
  }

  ngOnInit() {
    this.getPosts();

  }


  getPosts() {
    this.loading = true;
    return this.requestService.get("posts").subscribe((res: any) => {
      // 1 Leggo la risposta ricevuta dal server
      res.reverse();
      console.log(res)
      // TODO: Doppia sort check:    FATTO :)
      this.posts = res;
    }, (error) => {
      console.error(error);
      this.loading =false;
      this.errore=true
      // 2 La chiamata è andata in errore e di conseguenza bisognerebbe notificare l'utente
    }, () => {
      // 3 La chiamata è stata completata con successo (SENZA ERRORI)
      this.loading = false;
      this.errore=false;
    });
  }




}
