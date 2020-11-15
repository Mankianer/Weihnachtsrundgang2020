import { Component, OnInit } from '@angular/core';
import {QrCounterServiceService} from '../../services/qr-counter-service.service';

@Component({
  selector: 'app-station5',
  templateUrl: './station5.component.html',
  styleUrls: ['./station5.component.css']
})
export class Station5Component implements OnInit {

  constructor(public qrCounter: QrCounterServiceService) { }

  ngOnInit(): void {
    this.qrCounter.setStationViewed('5');
  }


}
