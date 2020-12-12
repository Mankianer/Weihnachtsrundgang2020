import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Route} from '@angular/router';

@Component({
  selector: 'app-visitor-counter',
  templateUrl: './visitor-counter.component.html',
  styleUrls: ['./visitor-counter.component.css']
})
export class VisitorCounterComponent implements OnInit {

  public stationCounts: number[] = [];

  constructor(private http: HttpClient) {
    for (let i = 1; i <= 8; i++) {
      this.http.get<any>('https://api.countapi.xyz/get/weihnachtsrundgang.five0.de/Station' + i)
      .subscribe(counter => this.stationCounts[i - 1] = (counter.value));
    }
    console.log(this.stationCounts);
  }

  ngOnInit(): void {
  }

  public countReset(station: number, lpw: string): void {
    if (lpw === 'lpw2020') {
      this.http.get('https://api.countapi.xyz/set/weihnachtsrundgang.five0.de/Station' + station + '?value=0')
      .subscribe(e => window.location.reload());

    }
  }

}
