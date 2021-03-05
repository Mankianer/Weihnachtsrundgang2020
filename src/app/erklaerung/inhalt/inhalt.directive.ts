import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appInhalt]',
  // templateUrl: './inhalt.component.html',
  // styleUrls: ['./inhalt.component.css']
})
export class InhaltDirective {
  constructor(public viewContainerRef: ViewContainerRef) {
  }
}

