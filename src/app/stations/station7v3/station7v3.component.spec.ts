import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Station7v3Component } from './station7v3.component';

describe('Station7v3Component', () => {
  let component: Station7v3Component;
  let fixture: ComponentFixture<Station7v3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Station7v3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Station7v3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
