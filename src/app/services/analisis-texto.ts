import { Injectable } from '@angular/core';
import { AnalisisSimpleStrategy, AnalisisStrategy } from '../models/analizador.model';

@Injectable({ providedIn: 'root' })

export class AnalisisService {

  private strategy: AnalisisStrategy;

  constructor() {
    this.strategy = new AnalisisSimpleStrategy();
  }

  setStrategy(strategy: AnalisisStrategy) {
    this.strategy = strategy;
  }

  analizarTexto(texto: string) {
    return this.strategy.analizar(texto);
  }
}

