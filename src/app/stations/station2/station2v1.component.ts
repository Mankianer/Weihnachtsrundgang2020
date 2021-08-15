import { Component, OnInit } from '@angular/core';
import {QrCounterServiceService} from '../../services/qr-counter-service.service';

@Component({
  selector: 'app-station2v1',
  templateUrl: './station2v1.component.html',
  styleUrls: ['./station2v1.component.css']
})
export class Station2v1Component implements OnInit {

  constructor(private qrCounter: QrCounterServiceService) { }

  ngOnInit(): void {
  }

}
