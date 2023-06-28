import { Component } from '@angular/core';
import {RequestService} from "../../../shared/services/request.service";

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.css']
})
export class FriendsListComponent {
  friends=[1,2,3,4,5,6,7]

  constructor() {
  }


}
