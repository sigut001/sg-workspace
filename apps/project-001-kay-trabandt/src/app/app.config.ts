import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';
import { provideStore } from '@ngrx/store';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { provideAnalytics, getAnalytics } from '@angular/fire/analytics';

import {
  provideHeaderState,
  provideCreditState,
} from '@sg-shared-librarys/navigation';

import {
  provideCompanyInformationsState,
  provideCompanyValuesState,
  provideCostumerReviewsState,
  provideProcessLineState,
} from '@sg-shared-librarys/ui-components';
import { firebaseConfig } from './config-files/firebaseAPI.config';
import { provideAppContentState } from './state/state-threeDPrinting/threeDPrinting.provider';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',
      })
    ),
    provideAnimationsAsync(),
    provideStore({
      router: routerReducer,
    }),
    provideAppContentState(),
    provideRouterStore(),
    provideHeaderState(),
    provideCreditState(),
    provideCompanyInformationsState(),

    provideCompanyValuesState(),
    provideCostumerReviewsState(),
    provideProcessLineState(),
    provideStoreDevtools({
      maxAge: 25, // Anzahl der zu verfolgenden States
      logOnly: false,
    }),

    // Firebase-App initialisieren
    provideFirebaseApp(() => initializeApp(firebaseConfig)),

    // Firestore Provider einbinden
    provideFirestore(() => getFirestore()),

    // Firebase Storage Provider einbinden
    provideStorage(() => getStorage()),

    provideAnalytics(() => getAnalytics()),
  ],
};

// Globales Aktivieren von Smooth Scrolling
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    document.documentElement.style.scrollBehavior = 'smooth';
  });

  // Zusätzlicher Schutz bei Popstate-Ereignissen (z. B. Zurück-Button)
  window.addEventListener('popstate', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Debugging-Funktion, um die Firebase-Konfiguration zu prüfen
console.log('[Debug] Firebase-Konfiguration:', firebaseConfig);
if (!firebaseConfig.apiKey) {
  console.error(
    '[Debug] Fehler: Die Firebase-Konfiguration enthält keinen apiKey.'
  );
}
if (!firebaseConfig.projectId) {
  console.error(
    '[Debug] Fehler: Die Firebase-Konfiguration enthält keine projectId.'
  );
}
