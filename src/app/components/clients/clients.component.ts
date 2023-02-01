import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ClientService } from "../../../services/client.service";
import {ModalpopupComponent} from "../modalpopup/modalpopup.component";
import {MatDialog} from "@angular/material/dialog";

export interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  thumbnail: string;
  picture: string;
  country: string;
}

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})

export class ClientsComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'country', 'picture'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor( private clientService: ClientService, private matdialog: MatDialog ) {
    // @ts-ignore
    this.dataSource = [];
  }

  ngOnInit() {
    this.clientService.fetchClient().subscribe(clients => {
      // @ts-ignore
      this.dataSource = new MatTableDataSource(clients);
    });
  }

  ngAfterViewInit() {
    // @ts-ignore
    this.dataSource.paginator = this.paginator;
    // @ts-ignore
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  OpenPopup(image: string) {
    // console.log(image,'sssssssssssssssssssssssssssssssssssssssss')
    this.matdialog.open(ModalpopupComponent, {width: '20%', height:'420px', data: image})
  }
}

