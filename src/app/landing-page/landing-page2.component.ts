import { Component, OnInit } from '@angular/core';
import {QrCounterServiceService} from '../services/qr-counter-service.service';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-landing2-page',
  templateUrl: './landing-page2.component.html',
  styleUrls: ['./landing-page2.component.css']
})
export class LandingPage2Component implements OnInit {

  constructor(public qrCounter: QrCounterServiceService, public cookieService: CookieService) { }

  ngOnInit(): void {
    this.qrCounter.setLandingPageViewed();
  }

}
