import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {InhaltComponent} from './inhalt.component';
import {MatButton} from '@angular/material/button';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {CookieService} from 'ngx-cookie-service';
import {QrCounterServiceService} from '../../services/qr-counter-service.service';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';

@Component({
  selector: 'app-erklaerung-navigation',
  template: '<p *ngIf="isHandset$ | async">Auf der Linken Seite siehst du ein Knopf, um die Navigation zu öffnen.</p>' +
            '<p *ngIf="!isHandset$ | async">Auf der linken Seite befindet sich die Navigation.</p>' +
            '<p>Dort gibt es:</p>' +
            '<p>die <strong>Startseite</strong><br>' +
            'die freigeschalteten <strong>Stationen (1-8)</strong>.<br>' +
            'die <strong>Belohnungen</strong> für frei geschaltete Stationen.<br>' +
            'die <strong>Karte</strong> um die Stationen zu finden.<br>' +
            'und <strong>Informationen</strong> wie <strong>Hilfe und Datenschutz</strong>.</p>',
  styleUrls: ['./inhalt.component.css']
})
export class ErklaerungNavigationComponent implements InhaltComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  constructor(private breakpointObserver: BreakpointObserver) {
  }

  getTitel(): string {
    return 'Navigation';
  }

  onClose(): void {
  }

}
