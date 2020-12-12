import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Station4v3Component } from './station4v3.component';

describe('Station4v3Component', () => {
  let component: Station4v3Component;
  let fixture: ComponentFixture<Station4v3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Station4v3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Station4v3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
