import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Station3v3Component } from './station3v3.component';

describe('Station3v3Component', () => {
  let component: Station3v3Component;
  let fixture: ComponentFixture<Station3v3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Station3v3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Station3v3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
