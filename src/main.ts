import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideHttpClient } from '@angular/common/http';
import { provideAppInitializer } from '@angular/core';
import { inject } from '@angular/core';

import { DiccionarioInsultosLoaderService } from './app/services/carga-archivos';

export function initDiccionario(loader: DiccionarioInsultosLoaderService) {
  return () => loader.cargar();
}

bootstrapApplication(App, {
  providers: [
    provideHttpClient(),
    DiccionarioInsultosLoaderService,
    provideAppInitializer(() => {
      const loader = inject(DiccionarioInsultosLoaderService);
      return loader.cargar();
    })
  ]
});