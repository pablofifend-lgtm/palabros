import { Component, signal } from '@angular/core';
import { AnalizadorComponent } from './components/analizar-texto/analizar-texto';

@Component({
  selector: 'app-root',
  imports: [AnalizadorComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('palabros');
}
