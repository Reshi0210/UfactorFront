import { TestBed } from '@angular/core/testing';

import { SecondGuardGuard } from './second-guard.guard';

describe('SecondGuardGuard', () => {
  let guard: SecondGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SecondGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
