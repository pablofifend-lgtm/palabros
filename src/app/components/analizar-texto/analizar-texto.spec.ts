import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalizarTexto } from './analizar-texto';

describe('AnalizarTexto', () => {
  let component: AnalizarTexto;
  let fixture: ComponentFixture<AnalizarTexto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalizarTexto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalizarTexto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
