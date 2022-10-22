import { TestBed } from '@angular/core/testing';

import { IntegracionesPoliticasService } from './integraciones-politicas.service';

describe('IntegracionesPoliticasService', () => {
  let service: IntegracionesPoliticasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntegracionesPoliticasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
