import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Station4v2Component } from './station4v2.component';

describe('Station4v2Component', () => {
  let component: Station4v2Component;
  let fixture: ComponentFixture<Station4v2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Station4v2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Station4v2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
