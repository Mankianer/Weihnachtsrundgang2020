import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AktuelleStationComponent } from './aktuelle-station.component';

describe('AktuelleStationComponent', () => {
  let component: AktuelleStationComponent;
  let fixture: ComponentFixture<AktuelleStationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AktuelleStationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AktuelleStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
