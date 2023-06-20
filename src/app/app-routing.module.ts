import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";
import {PostListComponent} from "./post/post-list/post-list.component";
import {FriendsListComponent} from "./friends/friends-list/friends-list.component";
import {PostDetailsComponent} from "./post/post-details/post-details.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [

  {path: '', component: LoginComponent},
  {path: 'post', component: HomeComponent},
  { path: 'friends', component: FriendsListComponent},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
