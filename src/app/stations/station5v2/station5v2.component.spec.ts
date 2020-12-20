import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Station5v2Component } from './station5v2.component';

describe('Station5v2Component', () => {
  let component: Station5v2Component;
  let fixture: ComponentFixture<Station5v2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Station5v2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Station5v2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
