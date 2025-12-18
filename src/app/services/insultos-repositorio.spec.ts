import { TestBed } from '@angular/core/testing';

import { InsultosRepositorio } from './insultos-repositorio';

describe('InsultosRepositorio', () => {
  let service: InsultosRepositorio;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsultosRepositorio);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
