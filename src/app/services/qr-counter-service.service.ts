import {EventEmitter, Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {formatNumber} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class QrCounterServiceService {

  private QrIds: string[] = ['613', '832', '464', '473', '338', '670', '887', '295'];
  private CookieString = 'QR_Count';

  public counter: EventEmitter<number> = new EventEmitter<number>();
  public lastCounter: number;

  constructor(public cookieService: CookieService) {
    console.log('XX' + JSON.stringify(this.cookieService.getAll()));
    this.counter.subscribe(n => this.lastCounter = n);
    if (!this.cookieService.check(this.CookieString)) {
      this.cookieService.set(this.CookieString, '', {path: '/'});
    }
    this.counter.emit((this.cookieService.get(this.CookieString).length));
    console.log('SwS' + this.lastCounter);
  }


  public addID(id: string): void {
    if (this.QrIds.includes(id)) {
      if (!this.cookieService.check('QR_ID/' + id)) {
        this.cookieService.set('QR_ID/' + id, 'X', {path: '/'});
        const qrCounter = this.cookieService.get(this.CookieString);
        this.cookieService.set(this.CookieString, qrCounter + 'X', {path: '/'});
        this.counter.emit((this.cookieService.get(this.CookieString).length));
      }
    }
  }
}
