import {Component, OnInit} from '@angular/core';
import {QrCounterServiceService} from '../../services/qr-counter-service.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-station3v1',
  template: `
    <img class="image" src="/assets/station/3/Wolken.png">
  `,
  styleUrls: ['./station3v1.component.css']
})
export class Station3v1Component implements OnInit {

  image: string;

  constructor(private qrCounter: QrCounterServiceService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

}
