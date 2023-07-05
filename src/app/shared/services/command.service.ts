import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {Comment} from "../types/comment";

@Injectable({
  providedIn: 'root'
})
export class CommandService {
subject=new Subject<Comment>();
}
