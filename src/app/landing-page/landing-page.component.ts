import {Component, OnInit} from '@angular/core';
import {QrCounterServiceService} from '../services/qr-counter-service.service';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(public qrCounter: QrCounterServiceService, public cookieService: CookieService) {
  }

  ngOnInit(): void {
    this.qrCounter.setLandingPageViewed();
    this.qrCounter.setStationViewed('2');
  }

  public reset(): void {
    this.cookieService.deleteAll('/');
    window.location.reload();
  }

}
