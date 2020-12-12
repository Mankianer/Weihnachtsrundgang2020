import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Station1v5Component } from './station1v5.component';

describe('Station1v5Component', () => {
  let component: Station1v5Component;
  let fixture: ComponentFixture<Station1v5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Station1v5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Station1v5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
