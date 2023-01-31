import { Component } from '@angular/core';
import { ClientTableComponent } from "../client-table/client-table.component";
import { ClientService } from "../../../services/client.service";

@Component({
  selector: 'app-togglebutton',
  templateUrl: './togglebutton.component.html',
  styleUrls: ['./togglebutton.component.scss']
})
export class TogglebuttonComponent {

  constructor(public cs: ClientService, public clientTable: ClientTableComponent) {
  }

  toggle = false

  loadClientsTable(){
    // this.cs.getClient()
    this.clientTable.toggleClass()
  }
}
