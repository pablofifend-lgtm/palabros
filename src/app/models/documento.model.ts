import { Analizable, Palabra } from './palabra.model';

export class Documento implements Analizable {

  constructor(private palabras: Palabra[]) {}

  contarInsultos(): number {
    return this.palabras.reduce(
      (acc, palabra) => acc + palabra.contarInsultos(),
      0
    );
  }

  pesoTotal(): number {
    return this.palabras.reduce(
      (acc, palabra) => acc + palabra.pesoTotal(),
      0
    );
  }
}
