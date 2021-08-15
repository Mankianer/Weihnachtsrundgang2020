import {Component, OnInit} from '@angular/core';
import {QrCounterServiceService} from '../../services/qr-counter-service.service';
import {Track} from 'ngx-audio-player';

@Component({
  selector: 'app-station3',
  templateUrl: './station3.component.html',
  styleUrls: ['./station3.component.css']
})
export class Station3Component implements OnInit {

  msaapPlaylist: Track[] = [{
    title: '„Africa“ - Boomhackers Nr 2',
    link: '/assets/audio/boomwhackers Klasse 5c Nr 2.mp3',
    artist: '5 c',
  }, {
    title: 'Zauberlehrling - Rap-Version',
    link: '/assets/audio/Zauberlehrling1.mp3',
    artist: 'Schüler der Stufe 7',
  }];

  constructor(private qrCounter: QrCounterServiceService) {
  }

  ngOnInit(): void {
    this.qrCounter.setStationViewed('3');
  }

}
