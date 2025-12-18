import { Insulto } from './palabra.model';
import { Documento } from './documento.model';

export interface AnalisisStrategy {
  analizar(texto: string): { insultos: number; peso: number };
}


export class AnalisisSimpleStrategy implements AnalisisStrategy {

  private insultos = [
    new Insulto('Ababol', 1),
    new Insulto('Cenutrio', 5),
    new Insulto('Cabron', 10)
  ];

  analizar(texto: string) {
    const documento = new Documento(texto, this.insultos);

    return {
      insultos: documento.contarInsultos(),
      peso: documento.pesoTotal()
    };
  }
}
