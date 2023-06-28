import {Component, OnInit} from '@angular/core';
import {RequestService} from "../../../shared/services/request.service";
import {Router} from "@angular/router";
import {Post} from "../../../shared/types/post";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit{
  posts= new Array<Post>()

  constructor( private requestService : RequestService) {
  }

ngOnInit() {
this.getPosts();
}

getPosts(){
  return this.requestService.get("posts").subscribe((res: any) => {
    // 1 Leggo la risposta ricevuta dal server
    console.log(res);
    console.log(this.posts)
    this.posts=res;
  }, (error) => {
    console.error(error);
    // 2 La chiamata è andata in errore e di conseguenza bisognerebbe notificare l'utente
  }, () => {
    // 3 La chiamata è stata completata con successo (SENZA ERRORI) e si può procedere con il login
  });
}



}
