import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Station5v3Component } from './station5v3.component';

describe('Station5v3Component', () => {
  let component: Station5v3Component;
  let fixture: ComponentFixture<Station5v3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Station5v3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Station5v3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
