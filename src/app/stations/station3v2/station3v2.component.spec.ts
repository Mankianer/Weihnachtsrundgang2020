import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Station3v2Component } from './station3v2.component';

describe('Station3v2Component', () => {
  let component: Station3v2Component;
  let fixture: ComponentFixture<Station3v2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Station3v2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Station3v2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
