import { TestBed } from '@angular/core/testing';

import { DepaService } from './depa.service';

describe('DepaService', () => {
  let service: DepaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
