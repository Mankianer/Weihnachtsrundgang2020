import { Component, OnInit } from '@angular/core';
import {QrCounterServiceService} from '../services/qr-counter-service.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(public qrCounter: QrCounterServiceService) { }

  ngOnInit(): void {
    this.qrCounter.setLandingPageViewed();
  }

}
