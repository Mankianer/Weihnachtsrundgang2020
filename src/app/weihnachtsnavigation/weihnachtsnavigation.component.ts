import {Component} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {CookieService} from 'ngx-cookie-service';
import {QrCounterServiceService} from '../services/qr-counter-service.service';

@Component({
  selector: 'app-weihnachtsnavigation',
  templateUrl: './weihnachtsnavigation.component.html',
  styleUrls: ['./weihnachtsnavigation.component.css']
})
export class WeihnachtsnavigationComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  constructor(private breakpointObserver: BreakpointObserver,
              public cookieService: CookieService, public qrCounter: QrCounterServiceService) {
  }

  public isAnyStationViewed(): boolean {
    for (let i = 1; i <= this.qrCounter.lastCounter; i++) {
      if (!this.qrCounter.isStationViewed('' + i)){
        return false;
      }
    }
    return true;
  }
}
