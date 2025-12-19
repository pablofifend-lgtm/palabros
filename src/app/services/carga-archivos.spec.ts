import { TestBed } from '@angular/core/testing';

import { CargaArchivos } from './carga-archivos';

describe('CargaArchivos', () => {
  let service: CargaArchivos;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargaArchivos);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
