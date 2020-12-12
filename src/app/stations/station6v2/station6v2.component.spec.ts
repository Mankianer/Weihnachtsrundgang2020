import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Station6v2Component } from './station6v2.component';

describe('Station6v2Component', () => {
  let component: Station6v2Component;
  let fixture: ComponentFixture<Station6v2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Station6v2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Station6v2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
