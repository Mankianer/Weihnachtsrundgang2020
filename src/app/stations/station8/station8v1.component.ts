import { Component, OnInit } from '@angular/core';
import {QrCounterServiceService} from '../../services/qr-counter-service.service';

@Component({
  selector: 'app-station8v1',
  templateUrl: './station8v1.component.html',
  styleUrls: ['./station8v1.component.css']
})
export class Station8v1Component implements OnInit {

  constructor(private qrCounter: QrCounterServiceService) { }

  ngOnInit(): void {
  }

}
