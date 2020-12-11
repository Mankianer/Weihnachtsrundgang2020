import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Station1v2Component } from './station1v2.component';

describe('Station1v2Component', () => {
  let component: Station1v2Component;
  let fixture: ComponentFixture<Station1v2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Station1v2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Station1v2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
