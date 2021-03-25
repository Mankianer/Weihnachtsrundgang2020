import {Component, OnInit} from '@angular/core';
import {QrCounterServiceService} from '../../services/qr-counter-service.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-station2v1',
  template: `
    <img class="image" src="/assets/station/2/Hinfallen1a.png" *ngIf="image === '1'">
    <img class="image" src="/assets/station/2/Aufstehen2.png" *ngIf="image === '2'">
    <img class="image" src="/assets/station/2/Kronerichten3B.png" *ngIf="image === '3'">
    <img class="image" src="/assets/station/2/Weitergehen4A.png" *ngIf="image === '4'">
  `,
  styleUrls: ['./station2v1.component.css']
})
export class Station2v1Component implements OnInit {

  image: string;

  constructor(private qrCounter: QrCounterServiceService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.qrCounter.setStationViewed('2');
    this.image = this.route.snapshot.url[2].path;
  }

}
