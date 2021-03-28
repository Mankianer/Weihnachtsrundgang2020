import {Component, OnInit} from '@angular/core';
import {QrCounterServiceService} from '../../services/qr-counter-service.service';

@Component({
  selector: 'app-station4v1',
  template: `
    <div class="hintergrund" style="height: 100%">
      <ul style="margin-top: 35px; margin-left: 25px; margin-right: 25px;">
        <li>Hast du schon länger einen Gedanken, den du aber doch immer wieder verwirfst? Weil du dich nicht traust oder
        immer was dazwischenkommt?</li>
        <li>Hast du Gewohnheiten, die dich nicht weiterbringen?</li>
        <li>Was wolltest du stattdessen schon immer einmal ausprobieren? Nimm es dir jetzt fest vor und setze es um!</li>
      </ul>
    </div>`,
  styleUrls: ['./station4.component.css']
})
export class Station4v1Component implements OnInit {

  constructor(private qrCounter: QrCounterServiceService) {
  }

  ngOnInit(): void {
  }

}
