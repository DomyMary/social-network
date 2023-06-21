import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FriendsListComponent } from './friends-list/friends-list.component';



@NgModule({
    declarations: [
        FriendsListComponent
    ],
    exports: [
        FriendsListComponent
    ],
    imports: [
        CommonModule
    ]
})
export class FriendsModule { }
