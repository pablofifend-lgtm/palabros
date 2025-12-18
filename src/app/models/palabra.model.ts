export interface Analizable {
  contarInsultos(): number;
  pesoTotal(): number;
}

export class Insulto {
  constructor(
    public palabra: string,
    public peso: number
  ) {}

  esInsulto(texto: string): boolean {
    return this.palabra.toLowerCase() === texto.toLowerCase();
  }
}

export class Palabra implements Analizable {
  constructor(
    private texto: string,
    private insultos: Insulto[]
  ) {}

  contarInsultos(): number {
    return this.esInsulto() ? 1 : 0;
  }

  pesoTotal(): number {
    const insulto = this.obtenerInsulto();
    return insulto ? insulto.peso : 0;
  }

  private esInsulto(): boolean {
    return this.obtenerInsulto() !== undefined;
  }

  private obtenerInsulto(): Insulto | undefined {
    return this.insultos.find(i => i.esInsulto(this.texto));
  }
}
