import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  host = '/api/';
  constructor(private http: HttpClient) { }


  get(url: string) {
    return this.http.get(this.host + url) ;
  }

  post(url: string, data: any) {
    return this.http.post(this.host + url, data);
  }

  delete(url: string) {
    return this.http.delete(this.host + url);
  }
}
