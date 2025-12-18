import { Documento } from './documento.model';
import { Palabra } from './palabra.model';
import { IPalabrasRepositorio } from './repositorio.model';
import { IInsultos } from './palabra.model';
import { Observable, map } from 'rxjs';

export interface AnalisisStrategy {
  analizar(texto: string): Observable<{ insultos: number; peso: number }>;
}

export class AnalisisSimpleStrategy implements AnalisisStrategy {

  constructor(
    private palabrasRepo: IPalabrasRepositorio,
    private insultosRepo: IInsultos
  ) {}

  analizar(texto: string): Observable<{ insultos: number; peso: number }> {

    return this.insultosRepo.dameInsultos().pipe(
      map(insultos => {

        const palabrasTexto = this.palabrasRepo.damePalabras(texto);

        const palabras = palabrasTexto.map(
          p => new Palabra(p, insultos)
        );

        const documento = new Documento(palabras);

        return {
          insultos: documento.contarInsultos(),
          peso: documento.pesoTotal()
        };
      })
    );
  }
}
