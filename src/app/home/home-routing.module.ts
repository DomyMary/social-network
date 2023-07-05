import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PaginaPrincipaleComponent} from "./pagina-principale/pagina-principale.component";


const routes: Routes = [
  {path: '', component: PaginaPrincipaleComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule{ }
