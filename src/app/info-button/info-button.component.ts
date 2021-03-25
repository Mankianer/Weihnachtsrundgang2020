import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';

export interface DialogData {
  text: string;
}

@Component({
  selector: 'app-info-button',
  templateUrl: './info-button.component.html',
  styleUrls: ['./info-button.component.css']
})
export class InfoButtonComponent implements OnInit {

  @Input() text = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.';

  constructor(public dialog: MatDialog) {
  }

  openDialog(): void {
    this.dialog.open(InfoDialog, {
      data: {
        text: this.text
      }
    });
  }

  ngOnInit(): void {
  }

}

@Component({
  selector: 'app-dialog-data-example-dialog',
  template: `
    <h2>Info</h2>
    <span>{{data.text}}</span>`,
})
export class InfoDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }
}
