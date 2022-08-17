import { TestBed } from '@angular/core/testing';

import { PlantillaServiceService } from './plantilla-service.service';

describe('PlantillaServiceService', () => {
  let service: PlantillaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlantillaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
