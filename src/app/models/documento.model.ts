import { Analizable, Palabra, Insulto } from './palabra.model'; 

export class Documento implements Analizable {
  private palabras: Palabra[] = [];

  constructor(texto: string, insultos: Insulto[]) {
    const tokens = texto
      .replace(/[.,;]/g, '')
      .split(/\s+/);

    this.palabras = tokens.map(
      palabra => new Palabra(palabra, insultos)
    );
  }

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
