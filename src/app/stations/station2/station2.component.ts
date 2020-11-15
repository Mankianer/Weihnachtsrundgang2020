import { Component, OnInit } from '@angular/core';
import {QrCounterServiceService} from '../../services/qr-counter-service.service';

@Component({
  selector: 'app-station2',
  templateUrl: './station2.component.html',
  styleUrls: ['./station2.component.css']
})
export class Station2Component implements OnInit {

  constructor(public qrCounter: QrCounterServiceService) { }

  ngOnInit(): void {
    this.qrCounter.setStationViewed('2');
  }

}
