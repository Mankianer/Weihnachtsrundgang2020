import { TestBed } from '@angular/core/testing';

import { QrCounterServiceService } from './qr-counter-service.service';

describe('QrCounterServiceService', () => {
  let service: QrCounterServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QrCounterServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
