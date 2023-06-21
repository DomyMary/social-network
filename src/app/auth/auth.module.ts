import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {RouterLink, RouterOutlet} from "@angular/router";



@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent
    ],
  exports: [

  ],
    imports: [
        CommonModule,
        RouterOutlet,
        RouterLink
    ]
})
export class AuthModule { }
