import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Station8Component } from './station8.component';

describe('Station8Component', () => {
  let component: Station8Component;
  let fixture: ComponentFixture<Station8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Station8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Station8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
