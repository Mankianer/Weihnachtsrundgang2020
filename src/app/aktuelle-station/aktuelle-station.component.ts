import { Component, OnInit } from '@angular/core';
import {QrCounterServiceService} from '../services/qr-counter-service.service';

@Component({
  selector: 'app-aktuelle-station',
  templateUrl: './aktuelle-station.component.html',
  styleUrls: ['./aktuelle-station.component.css']
})
export class AktuelleStationComponent implements OnInit {

  constructor(public qrCounter: QrCounterServiceService) { }

  ngOnInit(): void {
  }

}
