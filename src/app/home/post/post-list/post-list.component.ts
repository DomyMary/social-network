import {Component, OnInit} from '@angular/core';
import {RequestService} from "../../../shared/services/request.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit{
  arrayCard=[1,2,3,4]

  constructor( private requestService : RequestService) {
  }

ngOnInit() {
this.getPosts();
}

getPosts(){
  this.requestService.get("posts").subscribe((res: any) => {
    // 1 Leggo la risposta ricevuta dal server
    console.log(res);
  }, (error) => {
    console.error(error);
    // 2 La chiamata è andata in errore e di conseguenza bisognerebbe notificare l'utente
  }, () => {
    // 3 La chiamata è stata completata con successo (SENZA ERRORI) e si può procedere con il login

  });


  const newPost = {text: 'Ciao da Emauele'}
  this.requestService.post('posts', newPost).subscribe((res: any) => {
    console.log(res);
  }, (err) => {
    // LA richuiesta è andata in errore
  }, () => {
    // La richiesta è stata completata con successo
  });
}


}
