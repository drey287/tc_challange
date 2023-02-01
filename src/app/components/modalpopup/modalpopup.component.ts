import {Component, Inject, inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modalpopup',
  templateUrl: './modalpopup.component.html',
  styleUrls: ['./modalpopup.component.scss']
})
export class ModalpopupComponent implements OnInit {

  selectedImage: string | undefined;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
    this.selectedImage = this.data
    // console.log(this.data, "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh");
  }
}
