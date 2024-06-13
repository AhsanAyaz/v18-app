import { ApplicationConfig, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { RANDOMIZATION_COUNT } from './tokens';

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(withFetch()), provideExperimentalZonelessChangeDetection(), provideRouter(routes), provideClientHydration(), {
    provide: RANDOMIZATION_COUNT,
    useValue: 9
  }]
};
