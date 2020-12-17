import {EventEmitter, Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {formatNumber} from '@angular/common';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QrCounterServiceService {

  private QrIds: string[] = ['613', '832', '464', '473', '338', '670', '887', '295'];
  private CookieString = 'QR_Count';

  public counter: EventEmitter<number> = new EventEmitter<number>();
  public lastCounter: number;

  constructor(public cookieService: CookieService, private http: HttpClient) {
    this.counter.subscribe(n => this.lastCounter = n);
    if (!this.cookieService.check(this.CookieString)) {
      this.cookieService.set(this.CookieString, '', {path: '/', expires: new Date(2021, 2, 28)});
    }
    this.counter.emit((this.cookieService.get(this.CookieString).length));
  }

  public isLandingPageViewed(): boolean {
    return this.cookieService.check('LandingPageViewed');
  }

  public setLandingPageViewed(): void {
    return this.cookieService.set('LandingPageViewed', 'X', {path: '/', expires: new Date(2021, 2, 28)});
  }

  public setStationViewed(station: string, isViewed = true): void {
    const name = 'isStationViewed:' + station;
    if (isViewed) {
      this.cookieService.set(name, 'X', {path: '/', expires: new Date(2021, 2, 28)});
    } else {
      this.cookieService.delete(name, '/');
    }
  }

  public isStationViewed(station: string): boolean {
    const name = 'isStationViewed:' + station;
    return this.cookieService.check(name);
  }

  public isStation(station: number): boolean {
    const name = 'QR_ID:' + this.QrIds[station - 1];
    return this.cookieService.check(name);
  }

  public isNewStationForReward(): boolean {
    return !this.cookieService.check('NewStationForReward');
  }

  public updateNewStationForReward(neu: boolean): void {
    if (neu) {
      this.cookieService.set('NewStationForReward', 'X', {path: '/', expires: new Date(2021, 2, 28)});
    } else {
      this.cookieService.delete('NewStationForReward', '/');
    }
  }

  public addID(id: string): void {
    if (this.QrIds.includes(id)) {
      if (!this.cookieService.check('QR_ID:' + id)) {
        const domain = window.location.hostname;
        this.cookieService.set('QR_ID:' + id, 'X', {path: '/', expires: new Date(2021, 2, 28)});
        this.http.get('https://api.countapi.xyz/hit/' + domain + '/Station' + (this.lastCounter + 1)).subscribe();
        this.addCounter();
        this.updateNewStationForReward(true);
      }
    }
  }

  public removeAllCookie(): void {
    this.QrIds.forEach(id => {
        this.cookieService.delete('QR_ID:' + id, '/');
      }
    );
  }

  public addCounter(): void {
    const qrCounter = this.cookieService.get(this.CookieString);
    this.cookieService.set(this.CookieString, qrCounter + 'X', {path: '/', expires: new Date(2021, 2, 28)});
    this.counter.emit((this.cookieService.get(this.CookieString).length));
  }

  public subCounter(): void {
    const qrCounter = this.cookieService.get(this.CookieString);
    this.cookieService.set(this.CookieString, qrCounter.substr(0, qrCounter.length - 1), {path: '/', expires: new Date(2021, 2, 28)});
    this.counter.emit((this.cookieService.get(this.CookieString).length));
  }
}
