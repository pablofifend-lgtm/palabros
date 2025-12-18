import { IPalabrasRepositorio } from "../models/repositorio.model";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PalabrasRepositorioTexto implements IPalabrasRepositorio {

  damePalabras(texto: string): string[] {
    return texto
      .replace(/[.,;]/g, '')
      .split(/\s+/)
      .filter(p => p.length > 0);
  }
}