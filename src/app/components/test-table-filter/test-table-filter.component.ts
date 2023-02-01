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

/** Constants used to fill up our data base. */
const FRUITS: string[] = [
  'blueberry',
  'lychee',
  'kiwi',
  'mango',
  'peach',
  'lime',
  'pomegranate',
  'pineapple',
];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-test-table-filter',
  templateUrl: './test-table-filter.component.html',
  styleUrls: ['./test-table-filter.component.scss']
})
export class TestTableFilterComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'picture', 'country'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor( private clientService: ClientService, private matdialog: MatDialog ) {
    // @ts-ignore
    this.dataSource = [];
  }

  ngOnInit() {
    this.clientService.fetchClient().subscribe(clients => {
      console.log(clients, 'fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
      // @ts-ignore
      this.dataSource = new MatTableDataSource(clients);
    });
  }

  ngAfterViewInit() {
    // // @ts-ignore
    // this.dataSource.paginator = this.paginator;
    // // @ts-ignore
    // this.dataSource.sort = this.sort;
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
