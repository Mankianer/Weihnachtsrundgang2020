import { Component, OnInit } from '@angular/core';
import {QrCounterServiceService} from '../services/qr-counter-service.service';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-dev',
  templateUrl: './dev.component.html',
  styleUrls: ['./dev.component.css']
})
export class DevComponent implements OnInit {

  constructor(public qrCounter: QrCounterServiceService, public cookieService: CookieService) { }

  ngOnInit(): void {
  }

  public removeCookies(): void {
    this.cookieService.deleteAll('/');
    // this.qrCounter.removeAllCookie();
    // for (let i = 1; i < 9; i++) {
    //   this.qrCounter.setStationViewed('' + i, false);
    // }
  }

}
