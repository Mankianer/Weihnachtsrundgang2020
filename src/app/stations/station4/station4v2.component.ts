import { Component, OnInit } from '@angular/core';
import {QrCounterServiceService} from '../../services/qr-counter-service.service';

@Component({
  selector: 'app-station4v2',
  template: `<div class="hintergrund" style="height: 100%">
    <ul style="margin-top: 35px; margin-left: 25px; margin-right: 25px;">
      <li>Achte heute besonders auf die Dinge, die du wegwirfst oder die andere weggeworfen haben.</li>
      <li>Grüß heute zwei Personen, die dir entgegenkommen.</li>
      <li>Mach deine Augen zu und bleib so lange stehen bis dir etwas einfällt, wofür du Gott heute danken kannst.</li>
      <li>Sei kreativ und mach etwas Ungewöhnliches, worauf du Lust hast.</li>
    </ul>
  </div>`,
  styleUrls: ['./station4.component.css']
})
export class Station4v2Component implements OnInit {

  constructor(private qrCounter: QrCounterServiceService) { }

  ngOnInit(): void {
  }

}
