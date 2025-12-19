import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Insulto } from '../models/palabra.model';
import { firstValueFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DiccionarioInsultosLoaderService {

  private insultos: Insulto[] = [];

  constructor(private http: HttpClient) {}

  async cargar(): Promise<void> {
    const csv = await firstValueFrom(
      this.http.get<string>('assets/Palabros.csv', { responseType: 'text' as 'json' })
    );

    if (!csv) {
      throw new Error('No se pudo cargar el CSV de insultos');
    }

    this.insultos = csv
      .split('\n')
      .map(l => l.trim())
      .filter(l => l.length)
      .map(l => {
        const [palabra, peso] = l.split(',');
        return new Insulto(palabra.trim(), Number(peso));
      });
  }

  obtenerInsultos(): Insulto[] {
    return this.insultos;
  }
}
