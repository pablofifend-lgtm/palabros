import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { DiccionarioInsultosLoaderService } from './services/carga-archivos';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes)
  ]
};
export function initDiccionario(
  loader: DiccionarioInsultosLoaderService
) {
  return () => loader.cargar();
}
