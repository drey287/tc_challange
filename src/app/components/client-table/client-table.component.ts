import { AfterViewInit, Component, ViewChild, OnInit, AfterContentInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ClientTableDataSource, ClientTableItem } from './client-table-datasource';
import { ClientService } from "../../../services/client.service";
import { HttpClient } from "@angular/common/http";
import {Observable, pipe, map} from "rxjs";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {ModalpopupComponent} from "../modalpopup/modalpopup.component";

@Component({
  selector: 'app-client-table',
  templateUrl: './client-table.component.html',
  styleUrls: ['./client-table.component.scss'],
  providers: [
    ClientService
  ]
})
export class ClientTableComponent implements AfterViewInit, OnInit{
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<ClientTableItem>;
  dataSource: ClientTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['firstName', 'lastName', 'email', 'country', 'thumbnail'];
  toggle = true;

  isOpen = true;

  // private apiUrl = "https://randomuser.me/api/?results="
  // private numberOfClients: number = 10;
  constructor(public clientService: ClientService, public http: HttpClient, private modalService: NgbModal, private matdialog: MatDialog) {
    this.dataSource = new ClientTableDataSource();
  }

  ngOnInit() {
    this.clientService.fetchClient().subscribe(clients => {
      // @ts-ignore
      this.dataSource = clients;
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.transformClientData()
  }

  transformClientData(){
    // @ts-ignore
    this.table.dataSource = this.clientService.fetchClient();
    // console.log(this.table.dataSource, "aici")
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // this was the default implementation
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
  //         return clientArray;
  //       })
  //     )
  //     .subscribe(clients => {
  //       this.table.dataSource = clients;
  //     });
  // }

  toggleClass() {
    this.toggle = !this.toggle;
  }

  OpenPopup(image: string) {
    // console.log(image,'sssssssssssssssssssssssssssssssssssssssss')
    this.matdialog.open(ModalpopupComponent, {width: '20%', height:'420px', data: image})
  }
}
