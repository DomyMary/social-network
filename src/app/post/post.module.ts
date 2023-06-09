import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { CommentComponent } from './comment/comment.component';



@NgModule({
  declarations: [
    PostListComponent,
    PostDetailsComponent,
    CommentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PostModule { }
