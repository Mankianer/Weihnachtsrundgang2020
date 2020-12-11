import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Station7v2Component } from './station7v2.component';

describe('Station7v2Component', () => {
  let component: Station7v2Component;
  let fixture: ComponentFixture<Station7v2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Station7v2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Station7v2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
