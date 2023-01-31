import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-incercare',
  templateUrl: './incercare.component.html',
  styleUrls: ['./incercare.component.scss']
})
export class IncercareComponent implements OnInit{
  users: any[] = [];
  selectedImage: string | undefined;
  constructor(private http: HttpClient,  private modalService: NgbModal) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.http.get('https://randomuser.me/api/?results=10')
      .subscribe(data => {
        // @ts-ignore
        this.users = data['results'];
      });
  }

  openModal(image: string | undefined) {
    this.selectedImage = image;
    this.modalService.open(this.modalService, { size: 'lg' });
  }
}
