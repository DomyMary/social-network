import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { CreateNewPostComponent } from './create-new-post/create-new-post.component';
import { CreateNewCommentComponent } from './create-new-comment/create-new-comment.component';
import { NavPostComponent } from './nav-post/nav-post.component';
import {ReactiveFormsModule} from "@angular/forms";
import { PostComponent } from './post/post.component';
import { CommentComponent } from './comment/comment.component';



@NgModule({
  declarations: [
    PostListComponent,
    PostDetailsComponent,
    CommentListComponent,
    CreateNewPostComponent,
    CreateNewCommentComponent,
    NavPostComponent,
    PostComponent,
    CommentComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    PostListComponent,
    PostDetailsComponent,
    CommentListComponent,
    CreateNewPostComponent,
    CreateNewCommentComponent,
    NavPostComponent
  ]
})
export class PostModule { }
