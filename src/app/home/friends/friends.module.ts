import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FriendsListComponent } from './friends-list/friends-list.component';
import { FriendComponent } from './friend/friend.component';



@NgModule({
    declarations: [
        FriendsListComponent,
        FriendComponent
    ],
    exports: [
        FriendsListComponent
    ],
    imports: [
        CommonModule
    ]
})
export class FriendsModule { }
