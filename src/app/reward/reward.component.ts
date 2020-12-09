import { Component, OnInit } from '@angular/core';
import {QrCounterServiceService} from '../services/qr-counter-service.service';

@Component({
  selector: 'app-reward',
  templateUrl: './reward.component.html',
  styleUrls: ['./reward.component.css']
})
export class RewardComponent implements OnInit {

  constructor( public qrCounter: QrCounterServiceService) { }

  ngOnInit(): void {
    this.qrCounter.updateNewStationForReward(false);
  }

}
