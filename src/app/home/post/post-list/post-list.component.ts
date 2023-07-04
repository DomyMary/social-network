import {Component, OnInit} from '@angular/core';
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

  constructor(private requestService: RequestService) {
  }

  ngOnInit() {
    this.getPosts();
  }


  getPosts() {
    this.loading = true;
    return this.requestService.get("posts").subscribe((res: any) => {
      // 1 Leggo la risposta ricevuta dal server
      console.log(res);
      console.log(this.posts)
      this.posts = res;
    }, (error) => {
      console.error(error);
      this.loading = error
      // 2 La chiamata è andata in errore e di conseguenza bisognerebbe notificare l'utente
    }, () => {
      // 3 La chiamata è stata completata con successo (SENZA ERRORI)
      this.loading = false;
    });
  }


  addLike(postId: number) {
    const body = {post_id: postId}
    this.requestService.post("add-like/" + postId, body).subscribe((res: any) => {
      console.log(res);
    }, (err) => {
      console.log(err)
    }, () => {
      this.getPosts();
    })
  }

  removelike(postId: number, idLike: number) {
    this.requestService.delete("remove-like/" + idLike + "/" + postId).subscribe((res: any) => {
      console.log(res);
    }, (err) => {
      console.log(err)
    }, () => {
      this.getPosts();
    })

  }


  clickLike(postId: number, arrayLike: Array<any>) {
    if (arrayLike.length == 0) {
      this.addLike(postId);
      this.getPosts();
    } else {
      for (let i = 0; i < arrayLike.length; i++) {
        if (arrayLike[i].user_id + '' !== localStorage.getItem(`id`) ) {
          this.addLike(postId)

          break
        } else {
          this.removelike(postId, arrayLike[i].id)
          break
        }
      }
    }
  }


}
