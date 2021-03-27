import {Component, Inject, OnInit} from '@angular/core';
import {QrCounterServiceService} from '../../services/qr-counter-service.service';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {DialogData} from '../../info-button/info-button.component';

@Component({
  selector: 'app-station5',
  templateUrl: './station5.component.html',
  styleUrls: ['./station5.component.css']
})
export class Station5Component implements OnInit {

  constructor(private qrCounter: QrCounterServiceService, public dialog: MatDialog) {
  }


  openDialog(): void {
    this.dialog.open(YTDialog);
  }

  closeDialog(): void {
    this.dialog.closeAll();
  }

  ngOnInit(): void {
    this.qrCounter.setStationViewed('5');
  }

}

@Component({
  selector: 'app-dialog-yt',
  template: `
    <h2>Seite Verlassen?</h2>
    <p>Soll Youtube für die Wiedergabe geöffnet werden?</p>
    <a href="https://youtu.be/VePaI3jX4Sk" mat-flat-button>zu Youtube wechseln</a>
<!--    <button (click)="" mat-flat-button>Hier bleiben</button>-->
  `,
})
export class YTDialog {
}
