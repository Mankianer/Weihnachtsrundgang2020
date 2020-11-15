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

  private stationMap = new Map<string, boolean>();

  constructor(public cookieService: CookieService) {
    this.counter.subscribe(n => this.lastCounter = n);
    if (!this.cookieService.check(this.CookieString)) {
      this.cookieService.set(this.CookieString, '', {path: '/'});
    }
    this.counter.emit((this.cookieService.get(this.CookieString).length));
    this.syncStationViewed();
  }

  private syncStationViewed(): void {

  }

  public setStationViewed(station: string, isViewed = true): void {
    const name = 'isStationViewed:' + station;
    if (isViewed) {
      this.cookieService.set(name, 'X', {path: '/'});
    } else {
      this.cookieService.delete(name);
    }
  }

  public isStationViewed(station: string): boolean {
    const name = 'isStationViewed:' + station;
    return this.cookieService.check(name);
  }

  public addID(id: string): void {
    if (this.QrIds.includes(id)) {
      if (!this.cookieService.check('QR_ID:' + id)) {
        this.cookieService.set('QR_ID:' + id, 'X', {path: '/'});
        this.addCounter();
      }
    }
  }

  public removeAllCookie(): void {
    this.QrIds.forEach(id => {
        this.cookieService.delete('QR_ID/' + id, '/');
      }
    );
  }

  public addCounter(): void {
    const qrCounter = this.cookieService.get(this.CookieString);
    this.cookieService.set(this.CookieString, qrCounter + 'X', {path: '/'});
    this.counter.emit((this.cookieService.get(this.CookieString).length));
  }

  public subCounter(): void {
    const qrCounter = this.cookieService.get(this.CookieString);
    this.cookieService.set(this.CookieString, qrCounter.substr(0, qrCounter.length - 1), {path: '/'});
    this.counter.emit((this.cookieService.get(this.CookieString).length));
  }
}
