import { Component, OnInit } from '@angular/core';
import {QrCounterServiceService} from '../../services/qr-counter-service.service';

@Component({
  selector: 'app-station8',
  templateUrl: './station8.component.html',
  styleUrls: ['./station8.component.css']
})
export class Station8Component implements OnInit {

  constructor(public qrCounter: QrCounterServiceService) { }

  ngOnInit(): void {
    this.qrCounter.setStationViewed('8');
  }


}
