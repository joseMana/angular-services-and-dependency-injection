import { TestBed } from '@angular/core/testing';

import { ExtendedCounterService } from './extended-counter.service';

describe('ExtendedCounterService', () => {
  let service: ExtendedCounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExtendedCounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
