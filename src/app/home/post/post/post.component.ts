import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Post} from "../../../shared/types/post";
import {RequestService} from "../../../shared/services/request.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input() post:Post=Post.getPostObj()
  @Output() newItemEvent= new EventEmitter();
  @Input() index: number=0;
  errlike:boolean=false;
  button:boolean=false;
  constructor(private requestService: RequestService) {
  }

  addNewItem() {
    this.newItemEvent.emit();
  }
  addLike(postId: number) {
    const body = {post_id: postId}
    this.requestService.post("add-like/" + postId, body).subscribe((res: any) => {
      console.log(res);
      this.button=true
    }, (err) => {
      console.log(err)
      this.button=false;
      this.errlike=true
    }, () => {
      this.button=false
      this.errlike=false


    })
  }

  removelike(postId: number, idLike: number) {
    this.requestService.delete("remove-like/" + idLike + "/" + postId).subscribe((res: any) => {
      console.log(res);
      this.button=true;
    }, (err) => {
      console.log(err)
      this.button=false;
      this.errlike=true;
    }, () => {
      this.button=false
      this.errlike=false
    })

  }


  clickLike(postId: number, arrayLike: Array<any>) {
    this.addNewItem()
        if (arrayLike.length!==0 ) {
          for (let i = 0; i < arrayLike.length; i++) {
          this.removelike(postId, arrayLike[i].id)
            this.addNewItem()
          break
          }
        } else {
          this.addLike(postId)
          this.addNewItem()

      }
  }

}
