import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./auth/login/login.component";
import {Error403Component} from "./error/error403/error403.component";


const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'403', component: Error403Component},
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  {path:'**', component: Error403Component}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
