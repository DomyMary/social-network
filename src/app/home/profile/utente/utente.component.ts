import {Component, Input, OnInit} from '@angular/core';
import {RequestService} from "../../../shared/services/request.service";
import {User} from "../../../shared/types/user";

@Component({
  selector: 'app-utente',
  templateUrl: './utente.component.html',
  styleUrls: ['./utente.component.css']
})
export class UtenteComponent {

  protected readonly localStorage = localStorage;
}
