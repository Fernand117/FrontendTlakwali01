import { TestBed } from '@angular/core/testing';

import { CategoriasServicesService } from './categorias-services.service';

describe('CategoriasServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoriasServicesService = TestBed.get(CategoriasServicesService);
    expect(service).toBeTruthy();
  });
});
