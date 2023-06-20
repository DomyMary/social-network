import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { CommentComponent } from './comment/comment.component';
import {BrowserModule} from "@angular/platform-browser";
import {ProfileModule} from "../profile/profile.module";
import {FriendsModule} from "../friends/friends.module";



@NgModule({
  declarations: [
    PostListComponent,
    PostDetailsComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ProfileModule,
    FriendsModule
  ]
})
export class PostModule { }
