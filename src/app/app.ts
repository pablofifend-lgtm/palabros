import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnalizadorComponent } from './components/analizar-texto/analizar-texto';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AnalizadorComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('palabros');
}
