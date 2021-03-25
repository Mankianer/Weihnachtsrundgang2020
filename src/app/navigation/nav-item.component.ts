import {Component, Input} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {CookieService} from 'ngx-cookie-service';
import {QrCounterServiceService} from '../services/qr-counter-service.service';

@Component({
  selector: 'app-nav-item',
  template: `
    <a mat-list-item href="{{link}}" [ngClass]="highlight">
      <span class="font-nav-subtitel font-nav-bottom">{{subtitel}}</span>
      <span class="font-nav-bottom" style="width: 100%;">&nbsp;</span>
      <span class="font-nav-titel font-nav-bottom">{{titel}}</span>
    </a>`,
  styleUrls: ['./nav-item.component.css']
})
export class NavItemComponent {
  @Input() titel = 'titel';
  @Input() subtitel = 'subtitel';
  @Input() link = '/';
  @Input() public highlight: 'font-nav' | 'font-nav-highlight' = 'font-nav';
}
