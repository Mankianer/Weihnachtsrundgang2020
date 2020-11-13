import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Station7Component } from './station7.component';

describe('Station7Component', () => {
  let component: Station7Component;
  let fixture: ComponentFixture<Station7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Station7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Station7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
