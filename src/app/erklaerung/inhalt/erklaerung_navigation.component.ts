import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {InhaltComponent} from './inhalt.component';
import {MatButton} from '@angular/material/button';
import {BreakpointObserver} from '@angular/cdk/layout';
import {CookieService} from 'ngx-cookie-service';
import {QrCounterServiceService} from '../../services/qr-counter-service.service';

@Component({
  selector: 'app-erklaerung-navigation',
  template: '<p>Auf der Linken Seite siehst du ein Knopf, um die Navigation zu öffnen.</p>',
  styleUrls: ['./inhalt.component.css']
})
export class ErklaerungNavigationComponent implements InhaltComponent {

  constructor() {
  }

  getTitel(): string {
    return 'Navigation';
  }

  onClose(): void {
  }

}
