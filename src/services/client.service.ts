import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable, pipe, map} from "rxjs";

class Client {
}

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  dataSource: any[] = [];
  private numberOfClients: number = 250;
  selectedImage: string | undefined;
  private apiUrl = "https://randomuser.me/api/?results="

  constructor(private http: HttpClient) { }

  // second solution
  public fetchClient(): Observable<Client[]> {
    return this.http
      .get(this.apiUrl + this.numberOfClients)
      .pipe(
        map(responseData => {
          const clientArray = [];
          // @ts-ignore
          const results = responseData['results'];

          for (const result of results) {
            // console.log(result)

            const { name, email, picture, location } = result;
            clientArray.push({
              firstName: name.first,
              lastName: name.last,
              email,
              thumbnail: picture.thumbnail,
              picture: picture.large,
              country: location.country
            });
          }
          return clientArray;
        })
      );
  }

  // this was my initial solution, but could not bring the fetchClient to return correct data in component and the above
  // solution is wit a bit of help from a friend

  // first solution
  // public fetchClient() {
  //   this.http
  //     .get(this.apiUrl + this.numberOfClients)
  //     .pipe(
  //       map(responseData => {
  //         const clientArray = [];
  //         // @ts-ignore
  //         const results = responseData['results'];
  //
  //         for (const result of results) {
  //           const { name, email, picture } = result;
  //           clientArray.push({
  //             firstName: name.first,
  //             lastName: name.last,
  //             email,
  //             thumbnail: picture.thumbnail
  //           });
  //         }
  //         console.log(clientArray)
  //         return clientArray;
  //       })
  //     )
  //     .subscribe(clients => {
  //       this.dataSource = clients;
  //       return this.dataSource
  //     });
  // }
}
