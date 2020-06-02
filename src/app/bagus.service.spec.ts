import { TestBed } from '@angular/core/testing';

import { BagusService } from './bagus.service';

describe('BagusService', () => {
  let service: BagusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BagusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
