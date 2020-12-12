import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Station5v5Component } from './station5v5.component';

describe('Station5v5Component', () => {
  let component: Station5v5Component;
  let fixture: ComponentFixture<Station5v5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Station5v5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Station5v5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
