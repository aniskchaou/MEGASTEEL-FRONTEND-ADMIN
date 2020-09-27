import { TestBed } from '@angular/core/testing';

import { ActiviteService } from './activite.service';

describe('ActiviteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActiviteService = TestBed.get(ActiviteService);
    expect(service).toBeTruthy();
  });
});
