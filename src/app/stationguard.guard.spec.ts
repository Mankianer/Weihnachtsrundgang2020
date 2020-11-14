import { TestBed } from '@angular/core/testing';

import { StationguardGuard } from './stationguard.guard';

describe('StationguardGuard', () => {
  let guard: StationguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(StationguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
