import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Station2v2Component } from './station2v2.component';

describe('Station2v2Component', () => {
  let component: Station2v2Component;
  let fixture: ComponentFixture<Station2v2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Station2v2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Station2v2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
