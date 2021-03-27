import {Component, OnInit} from '@angular/core';
import {QrCounterServiceService} from '../../services/qr-counter-service.service';

@Component({
  selector: 'app-station1v1',
  template: `
    <div class="hintergrund">
      <iframe src="https://app.sli.do/event/o3gx86nj/embed/polls/004377fe-6438-4734-b64d-3185ee376e3d"
      style="min-width: 300px; width: 100%; height: 100%"></iframe>
    </div>`,
  styleUrls: ['./station1v1.component.css']
})
export class Station1v1Component implements OnInit {

  constructor(private qrCounter: QrCounterServiceService) {
  }

  ngOnInit(): void {
    this.qrCounter.setStationViewed('1');
  }

}
