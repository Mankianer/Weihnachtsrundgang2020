import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Station6Component } from './station6.component';

describe('Station6Component', () => {
  let component: Station6Component;
  let fixture: ComponentFixture<Station6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Station6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Station6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
