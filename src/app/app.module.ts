import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './components/nav/nav.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ClientTableComponent } from './components/client-table/client-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { BodyComponent } from './components/body/body.component';
import { TogglebuttonComponent } from './components/togglebutton/togglebutton.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {ClientTableDataSource } from "./components/client-table/client-table-datasource";
import { IncercareComponent } from './components/incercare/incercare.component';
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import {MatTableDataSource} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SidebarComponent,
    ClientTableComponent,
    BodyComponent,
    // TogglebuttonComponent,
    IncercareComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [
    ClientTableComponent,
    ClientTableDataSource,
    MatTableDataSource
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
