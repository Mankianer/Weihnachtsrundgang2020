import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-inhalt',
  template: '<p>inhalt works!2</p>',
  styleUrls: ['./inhalt.component.css']
})
export class InhaltComponent {
  getTitel: () => string;
  onClose: () => void;

}
