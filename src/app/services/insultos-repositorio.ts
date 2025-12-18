import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { IInsultos, Insulto } from '../models/palabra.model';

@Injectable({ providedIn: 'root' })
export class InsultosRepositorioCsv implements IInsultos {

  private readonly ruta = 'assets/Palabros.csv';

  constructor(private http: HttpClient) {}

  dameInsultos(): Observable<Insulto[]> {
    return this.http
      .get(this.ruta, { responseType: 'text' })
      .pipe(
        map(csv => this.parseCsv(csv))
      );
  }

  private parseCsv(csv: string): Insulto[] {
    return csv
      .split('\n')
      .map(l => l.trim())
      .filter(l => l.length > 0)
      .map(l => {
        const [palabra, peso] = l.split(',');
        return new Insulto(palabra.trim(), Number(peso));
      });
  }
}
