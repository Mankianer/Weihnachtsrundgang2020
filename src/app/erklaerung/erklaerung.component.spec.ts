import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErklaerungComponent } from './erklaerung.component';

describe('ErklaerungComponent', () => {
  let component: ErklaerungComponent;
  let fixture: ComponentFixture<ErklaerungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErklaerungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErklaerungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
