import { Component, OnInit } from '@angular/core';
import {QrCounterServiceService} from '../../services/qr-counter-service.service';

@Component({
  selector: 'app-station6',
  templateUrl: './station6.component.html',
  styleUrls: ['./station6.component.css']
})
export class Station6Component implements OnInit {

  constructor(public qrCounter: QrCounterServiceService) { }

  ngOnInit(): void {
    this.qrCounter.setStationViewed('6');
  }


}
