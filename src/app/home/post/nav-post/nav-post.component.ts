import {Component, EventEmitter, Output} from '@angular/core';
import {Subject} from "rxjs";
import {Post} from "../../../shared/types/post";
import {CommandService} from "../../../shared/services/command.service";

@Component({
  selector: 'app-nav-post',
  templateUrl: './nav-post.component.html',
  styleUrls: ['./nav-post.component.css']
})
export class NavPostComponent {
  searchInput = ""


  constructor(public commandService: CommandService) {
  }

  update(value: string) {
    this.searchInput = value;
  }

  riaggiorna() {
    this.commandService.subject.next({update:'update'})
  }

  searchPost() {
    this.commandService.subject.next({search:this.searchInput});


  }


}
