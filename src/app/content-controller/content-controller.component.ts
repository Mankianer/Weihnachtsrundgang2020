import {Component, OnInit} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {ActivatedRoute} from '@angular/router';
import {QrCounterServiceService} from '../services/qr-counter-service.service';

@Component({
  selector: 'app-content-controller',
  templateUrl: './content-controller.component.html',
  styleUrls: ['./content-controller.component.css']
})
export class ContentControllerComponent implements OnInit {

  constructor(public cookieService: CookieService, private route: ActivatedRoute, public qrCounter: QrCounterServiceService) {
  }

  ngOnInit(): void {
    this.qrCounter.addID(this.route.snapshot.paramMap.get('id'));
  }

}
