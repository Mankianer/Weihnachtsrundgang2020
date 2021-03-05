import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {InhaltComponent} from './inhalt.component';
import {MatButton} from '@angular/material/button';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {CookieService} from 'ngx-cookie-service';
import {QrCounterServiceService} from '../../services/qr-counter-service.service';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';

@Component({
  selector: 'app-erklaerung-scannen',
  template: '<p>Um Stationen freizuschalten, muss man die QR-Codes an den Stationen rund um den Phönix-See scannen und den Link aufrufen.</p>' +
    '<p>Jeder neue QR-Code schaltet die nächste Station auf dieser Webseite frei. Dabei ist die Reihenfolge egal.</p>' +
    '<p>Die Informationen über die freigeschalteten Stationen werden als Cookies gespeichert. Die gespeicherten Cookies können auf der ' +
    'Startseite gelöscht werden.</p>',
  styleUrls: ['./inhalt.component.css']
})
export class ErklaerungScannenComponent implements InhaltComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  constructor(private breakpointObserver: BreakpointObserver) {
  }

  getTitel(): string {
    return 'Scannen';
  }

  onClose(): void {
  }

}
