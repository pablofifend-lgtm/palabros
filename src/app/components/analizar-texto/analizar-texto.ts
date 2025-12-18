import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AnalisisService } from '../../services/analisis-texto';

@Component({
  selector: 'app-analizador',
  templateUrl: './analizar-texto.html',
  imports: [FormsModule, CommonModule],
  styleUrl: './analizar-texto.css'
})
export class AnalizadorComponent {
  texto = '';
  resultado?: { insultos: number; peso: number };

  constructor(private analisisService: AnalisisService) { }

  analizar() {
    this.analisisService
      .analizarTexto(this.texto)
      .subscribe(res => this.resultado = res);
  }
  
  contarPalabras(): number {
    return this.texto.trim().split(/\s+/).filter(word => word.length > 0).length;
  }
}
