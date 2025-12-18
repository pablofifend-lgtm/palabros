import { Injectable } from '@angular/core';
import { AnalisisSimpleStrategy, AnalisisStrategy } from '../models/analizador.model';
import { PalabrasRepositorioTexto } from './palabras-texto';
import { InsultosRepositorioCsv } from './insultos-repositorio';

@Injectable({ providedIn: 'root' })
export class AnalisisService {

  private strategy: AnalisisStrategy;

  constructor(
    palabrasRepo: PalabrasRepositorioTexto,
    insultosRepo: InsultosRepositorioCsv
  ) {
    this.strategy = new AnalisisSimpleStrategy(
      palabrasRepo,
      insultosRepo
    );
  }

  analizarTexto(texto: string) {
    return this.strategy.analizar(texto);
  }
}
