import { Component, OnInit } from '@angular/core';
import {QrCounterServiceService} from '../../services/qr-counter-service.service';

@Component({
  selector: 'app-station7v1',
  templateUrl: './station7v1.component.html',
  styleUrls: ['./station7v1.component.css']
})
export class Station7v1Component implements OnInit {

  constructor(private qrCounter: QrCounterServiceService) { }

  ngOnInit(): void {
    this.qrCounter.setStationViewed('7');
  }

}
