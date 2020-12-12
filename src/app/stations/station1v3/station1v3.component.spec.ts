import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Station1v3Component } from './station1v3.component';

describe('Station1v3Component', () => {
  let component: Station1v3Component;
  let fixture: ComponentFixture<Station1v3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Station1v3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Station1v3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
