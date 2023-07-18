import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Post} from "../../../shared/types/post";
import {RequestService} from "../../../shared/services/request.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input() post: Post = Post.getPostObj()
  @Input() index: number = 0;
  errlike: boolean = false;
  loading: boolean = false;

  constructor(private requestService: RequestService) {
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




}


