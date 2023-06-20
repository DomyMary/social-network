import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtenteComponent } from './utente/utente.component';



@NgModule({
    declarations: [
        UtenteComponent
    ],
    exports: [
        UtenteComponent
    ],
    imports: [
        CommonModule
    ]
})
export class ProfileModule { }
