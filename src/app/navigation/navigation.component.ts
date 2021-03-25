import {Component} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {CookieService} from 'ngx-cookie-service';
import {QrCounterServiceService} from '../services/qr-counter-service.service';

@Component({
  selector: 'app-weihnachtsnavigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  public stationSubtitels = ['NEU ANFANGEN', 'WIEDER AUFSTEHEN', 'NEUER MORGEN', 'NEUE PERSPEKTIVE', 'NEUER MUT', 'NEUE MOTIVATION',
    'IMMER WIEDER NEU', 'NEUE GEMEINSCHAFT'];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  constructor(private breakpointObserver: BreakpointObserver,
              public cookieService: CookieService, public qrCounter: QrCounterServiceService) {
  }

  public getArrayOfStations(): number[] {
    return Array(this.qrCounter.lastCounter).fill(0);
  }

  public isAnyStationViewed(): boolean {
    // if (!this.qrCounter.isNewStationForReward()) {
    //   return false;
    // }
    for (let i = 1; i <= this.qrCounter.lastCounter; i++) {
      if (!this.qrCounter.isStationViewed('' + i)) {
        return false;
      }
    }
    return true;
  }
}
