import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Station8v2Component } from './station8v2.component';

describe('Station8v2Component', () => {
  let component: Station8v2Component;
  let fixture: ComponentFixture<Station8v2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Station8v2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Station8v2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
