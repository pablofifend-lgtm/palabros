import { TestBed } from '@angular/core/testing';

import { PalabrasTexto } from './palabras-texto';

describe('PalabrasTexto', () => {
  let service: PalabrasTexto;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PalabrasTexto);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
