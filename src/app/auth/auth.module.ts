import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {RouterLink, RouterOutlet} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";



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
        RouterLink,
        ReactiveFormsModule
    ]
})
export class AuthModule { }
