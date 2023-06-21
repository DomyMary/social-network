import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FriendsModule} from "./friends/friends.module";
import {PostModule} from "./post/post.module";
import {ProfileModule} from "./profile/profile.module";
import { PaginaPrincipaleComponent } from './pagina-principale/pagina-principale.component';
import { NavComponent } from './nav/nav.component';
import {HomeRoutingModule} from "./home-routing.module";



@NgModule({
  declarations: [
    PaginaPrincipaleComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    FriendsModule,
    PostModule,
    ProfileModule,
    HomeRoutingModule
  ],

  exports:[
    CommonModule
  ]
})
export class HomeModule { }
