import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Route} from '@angular/router';
import {QrCounterServiceService} from '../services/qr-counter-service.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-visitor-counter',
  templateUrl: './visitor-counter.component.html',
  styleUrls: ['./visitor-counter.component.css']
})
export class VisitorCounterComponent implements OnInit {

  public stationCounts: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  public stationKey = 'station';

  constructor(private http: HttpClient, private qrCounter: QrCounterServiceService) {
  }

  ngOnInit(): void {
    // const domain = window.location.hostname;
    // for (let i = 1; i <= 8; i++) {
    //   this.http.get<any>('https://api.countapi.xyz/get/' + domain + '/station' + i)
    //   .subscribe(counter => this.stationCounts[i - 1] = (counter.value), error => {
    //     this.http.get<any>('https://api.countapi.xyz/create?namespace=' + domain + '&key=station' + i + '&enable_reset=1&value=0')
    //     .subscribe();
    //     this.stationCounts[i - 1] = 0;
    //   });
    // }
    // this.qrCounter.QrIds.forEach((value) => {
    //   this.http.get<any>('https://api.countapi.xyz/get/' + domain + '/QR-Code' + value)
    //   .subscribe(counter => this.qrCodes.set(value, (counter.value)), error => {
    //     this.http.get<any>('https://api.countapi.xyz/create?namespace=' + domain + '&key=QR-Code' + value + '&enable_reset=1&value=0')
    //     .subscribe();
    //     this.qrCodes.set(value, 0);
    //   });
    // });
  }

  private targetAdresseGet = 'https://api.countapi.xyz/get/';
  private targetAdresseCreate = 'https://api.countapi.xyz/create?namespace=';
  private domain = window.location.hostname;

  public getCounterByKey(key: string): Observable<any> {
    return this.http.get<any>(this.targetAdresseGet + this.domain + '/' + key);
    // .subscribe(counter => this.stationCounts[i - 1] = (counter.value), error => {
    //   this.createCounter(key);
    // }) ;
  }

  private createCounter(key: string): void {
    this.http.get<any>(this.targetAdresseCreate + this.domain + '&key=' + key + '&enable_reset=1&value=0')
    .subscribe();
  }

  public countReset(station: number, lpw: string): void {
    if (lpw === 'lpw2020') {
      const domain = window.location.hostname;
      this.http.get('https://api.countapi.xyz/set/' + domain + '/station' + station + '?value=0')
      .subscribe(e => window.location.reload());

    }
  }

}
