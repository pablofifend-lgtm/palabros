import { Injectable } from '@angular/core';
import { AnalisisSimpleStrategy, AnalisisStrategy } from '../models/analizador.model';

import { DiccionarioInsultosLoaderService } from './carga-archivos';

@Injectable({ providedIn: 'root' })
export class AnalisisService {

  private strategy: AnalisisStrategy;

  constructor(
    loader: DiccionarioInsultosLoaderService
  ) {
    this.strategy = new AnalisisSimpleStrategy(loader);
  }

  analizarTexto(texto: string) {
    return this.strategy.analizar(texto);
  }
}