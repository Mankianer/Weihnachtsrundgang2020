import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Station8v4Component } from './station8v4.component';

describe('Station8v4Component', () => {
  let component: Station8v4Component;
  let fixture: ComponentFixture<Station8v4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Station8v4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Station8v4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
