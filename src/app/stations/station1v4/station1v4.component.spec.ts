import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Station1v4Component } from './station1v4.component';

describe('Station1v4Component', () => {
  let component: Station1v4Component;
  let fixture: ComponentFixture<Station1v4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Station1v4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Station1v4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
