import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-text-stats',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './text-stats.html',
  styleUrls: ['./text-stats.css']
})
export class TextStatsComponent {
  texto: string = '';

  get cantidadPalabras(): number {
    if (!this.texto.trim()) {
      return 0;
    }
    return this.texto.trim().split(/\s+/).length;
  }

  get cantidadLetras(): number {
    // Cuenta solo letras (ignora espacios y signos)
    return (this.texto.match(/[a-zA-ZáéíóúÁÉÍÓÚñÑ]/g) || []).length;
  }
}
