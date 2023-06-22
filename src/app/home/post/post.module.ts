import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { CommentComponent } from './comment/comment.component';
import { CreateNewPostComponent } from './create-new-post/create-new-post.component';



@NgModule({
  declarations: [
    PostListComponent,
    PostDetailsComponent,
    CommentComponent,
    CreateNewPostComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PostListComponent,
    PostDetailsComponent,
    CommentComponent,
    CreateNewPostComponent
  ]
})
export class PostModule { }
