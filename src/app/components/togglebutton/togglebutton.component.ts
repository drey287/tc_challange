import { Component } from '@angular/core';
import { ClientTableComponent } from "../client-table/client-table.component";

@Component({
  selector: 'app-togglebutton',
  templateUrl: './togglebutton.component.html',
  styleUrls: ['./togglebutton.component.scss']
})
export class TogglebuttonComponent {


  constructor(public ct: ClientTableComponent) {
  }

  loadClientsTable(){
    this.ct.toggleClass()
  }
}
