import {Component, ComponentFactoryResolver, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {InhaltDirective} from './inhalt/inhalt.directive';
import {InhaltComponent} from './inhalt/inhalt.component';
import {NgTemplateOutlet} from '@angular/common';
import {ErklaerungNavigationComponent} from './inhalt/erklaerung_navigation.component';
import {ErklaerungScannenComponent} from './inhalt/erklaerung_scannen.component';


@Component({
  selector: 'app-erklaerung',
  templateUrl: './erklaerung.component.html',
  styleUrls: ['./erklaerung.component.css']
})
export class ErklaerungComponent implements OnInit {

  private inhaltComponents: any[] = [ErklaerungNavigationComponent, ErklaerungScannenComponent];
  currentInhaltComponents: InhaltComponent;

  subtitel = 'XX';

  @ViewChild(InhaltDirective, {static: true}) appInhalt: InhaltDirective;

  index = 0;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit(): void {
    this.loadInhalt();
  }


  private loadInhalt(): void{
    const comp = this.inhaltComponents[this.index % this.inhaltComponents.length];
    // this.currentInhaltComponents = comp.prototype;
    this.subtitel = comp.prototype.getTitel();
    // comp.prototype.funktion();
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory<InhaltComponent>(comp);

    const viewContainerRef = this.appInhalt.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<InhaltComponent>(componentFactory);
  }

  zurueck(): void {
    if (this.index > 0){
      this.index--;
      this.loadInhalt();
    }
  }

  weiter(): void {
    this.index++;
    this.loadInhalt();
  }
}
