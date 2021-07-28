import {Component, OnInit} from '@angular/core';
import {QrCounterServiceService} from '../../services/qr-counter-service.service';

@Component({
  selector: 'app-station1',
  templateUrl: './station1.component.html',
  styleUrls: ['./station1.component.css']
})
export class Station1Component implements OnInit {

  hit = false;

  constructor(private qrCounter: QrCounterServiceService) {
  }

  ngOnInit(): void {
    this.qrCounter.setStationViewed('1');
  }

  ichsitze(): void {
    this.hit = true;
  }

}
