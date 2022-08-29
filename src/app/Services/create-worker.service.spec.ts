import { TestBed } from '@angular/core/testing';

import { CreateWorkerService } from './create-worker.service';

describe('CreateWorkerService', () => {
  let service: CreateWorkerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateWorkerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
