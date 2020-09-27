import { TestBed } from '@angular/core/testing';

import { OFService } from './of.service';

describe('OFService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OFService = TestBed.get(OFService);
    expect(service).toBeTruthy();
  });
});
