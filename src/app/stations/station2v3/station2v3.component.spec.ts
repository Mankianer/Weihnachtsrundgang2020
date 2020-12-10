import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Station2v3Component } from './station2v3.component';

describe('Station2v3Component', () => {
  let component: Station2v3Component;
  let fixture: ComponentFixture<Station2v3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Station2v3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Station2v3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
