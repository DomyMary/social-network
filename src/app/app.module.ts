import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthModule} from "./auth/auth.module";
import {PostModule} from "./post/post.module";
import {CommonModule} from "@angular/common";
import { HomeComponent } from './home/home.component';
import {ProfileModule} from "./profile/profile.module";
import {FriendsModule} from "./friends/friends.module";
import { NavbarComponent } from './navbar/navbar.component';
import { CreatePostComponent } from './create-post/create-post.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CreatePostComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    AuthModule,
    PostModule,
    BrowserAnimationsModule,
    ProfileModule,
    FriendsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
