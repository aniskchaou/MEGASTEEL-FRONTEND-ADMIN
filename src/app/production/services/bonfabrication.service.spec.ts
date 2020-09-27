import { TestBed } from '@angular/core/testing';

import { BonfabricationService } from './bonfabrication.service';

describe('BonfabricationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BonfabricationService = TestBed.get(BonfabricationService);
    expect(service).toBeTruthy();
  });
});
