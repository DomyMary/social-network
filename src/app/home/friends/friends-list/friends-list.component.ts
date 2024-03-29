import {Component, OnInit} from '@angular/core';
import {RequestService} from "../../../shared/services/request.service";
import {User} from "../../../shared/types/user";
import {FormControl, FormGroup} from "@angular/forms";
import {CommandService} from "../../../shared/services/command.service";

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.css']
})
export class FriendsListComponent implements OnInit {
  friends = new Array<User>()
  loading = true;
  errore: boolean = false;
  searchInput = ""


  constructor(private requestService: RequestService) {
  }


  ngOnInit() {
    this.getFriends();

  }

  update(value: string) {
    this.searchInput = value;
  }

  getFriends() {
    this.loading = true
    return this.requestService.get("users").subscribe((res: any) => {

      console.log(res);
      this.friends = res;

    }, (error) => {
      console.error(error);
      this.loading = error;
      this.errore = true;

      // 2 La chiamata è andata in errore e di conseguenza bisognerebbe notificare l'utente
    }, () => {
      // 3 La chiamata è stata completata con successo (SENZA ERRORI)
      this.loading = false;
      this.salvaIdUserAttuale();
      this.errore = false;


    })
  }

  salvaIdUserAttuale() {
    localStorage?.setItem("friends", JSON?.stringify(this.friends))
    for (let i = 0; i < this.friends.length; i++) {
      if (this.friends[i].username == localStorage.getItem("username")) {
        localStorage.setItem("id", String(this.friends[i].id));
        this.friends.splice(i, 1);
      }

    }
  }

  searchFriends() {
    console.log(this.searchInput)
    this.friends=this.friends.filter(value =>
      value.username.includes(this.searchInput));



  }


}
