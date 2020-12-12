import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Station8v3Component } from './station8v3.component';

describe('Station8v3Component', () => {
  let component: Station8v3Component;
  let fixture: ComponentFixture<Station8v3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Station8v3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Station8v3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
