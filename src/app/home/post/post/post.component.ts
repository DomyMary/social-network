import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Post} from "../../../shared/types/post";
import {RequestService} from "../../../shared/services/request.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post: Post = Post.getPostObj()
  @Input() index: number = 0;
  errlike: boolean = false;
  loading: boolean = false;
  errPost: boolean = false;
  loadingPost: boolean = false;
  username = ""

  constructor(private requestService: RequestService) {
  }

  ngOnInit() {
    this.getUsername()
  }

  clickLike(postId: number) {
    this.errlike = false;
    this.loading = true
    this.requestService.put("update-like/" + postId, postId).subscribe((res: any) => {
      console.log(res);
      this.post = res;
    }, (err) => {
      console.log(err)
      this.loading = false;
      this.errlike = true;
    }, () => {
      this.loading = false
      this.errlike = false;
    })

  }


  getPost(idPost: number) {
    this.loadingPost = true;
    this.errPost = false;
    this.requestService.get("posts/" + idPost).subscribe((res: any) => {
      this.post = res
    }, (err) => {
      console.log(err)
      this.errPost = true
      this.loadingPost = false
    }, () => {
      this.errPost = false
      this.loadingPost = false

    })
  }

  getUsername() {
    const c = localStorage?.getItem("friends")
    let friends = JSON.parse(c || '{}')
    for (let i = 0; i < friends.length; i++) {
      if (friends[i].id == this.post.user_id) {
        this.username = friends[i].username
      }
    }
  }
}


