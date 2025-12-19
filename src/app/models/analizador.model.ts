import { Documento } from './documento.model';
import { Palabra } from './palabra.model';
import { DiccionarioInsultosLoaderService } from '../services/carga-archivos';
import { Observable, of} from 'rxjs';

export interface AnalisisStrategy {
  analizar(texto: string): Observable<{ insultos: number; peso: number }>;
}

export class AnalisisSimpleStrategy implements AnalisisStrategy {

  constructor(private loader: DiccionarioInsultosLoaderService) {}

  analizar(texto: string): Observable<{ insultos: number; peso: number }> {
    const insultos = this.loader.obtenerInsultos();
    const tokens = texto.replace(/[.,;]/g, '').split(/\s+/);
    const palabras = tokens.map(t => new Palabra(t, insultos));
    const documento = new Documento(palabras);

    return of({
      insultos: documento.contarInsultos(),
      peso: documento.pesoTotal()
    });
  }
}