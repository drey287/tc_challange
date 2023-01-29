import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable, pipe, map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  constructor(private http: HttpClient) { }

  getClient(){
    this.http.get('https://randomuser.me/api/?results=1')
      .subscribe(response => {
        console.log(response, "plm")
      })
  }
}
