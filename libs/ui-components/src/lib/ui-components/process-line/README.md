# Komponente: `processLineComponent`

## Übersicht

Die `processLineComponent`-Komponente ist Teil der `sg-library` und stellt einen Header bereit, der sowohl für Desktop als auch für Mobile genutzt werden kann. Die einzelnen Komponenten greifen hierbei auf einen eigenen Slice im NGRX Store zu. Aus diesem Grund ist es eine Voraussetzung, dass beim Einbinden dieser Komponente in eine Anwendung in der `app.component` die notwendigen Daten in den Store geladen werden und in der `app.config.ts` der FeatureState bereitgestellt wird.

Damit die richtigen Daten für diese Komponente zur Verfügung gestellt werden, bedarf es der passenden Konfigurationsdatei, welche beim Start der Anwendung in den Store dispatched wird.

## Voraussetzungen

- **@ngrx/store**: Die Komponente benötigt `@ngrx/store`, um auf den globalen Zustand (State) zuzugreifen.

## Installation und Setup

1. **Installiere die Bibliothek**:
   npm install @ngrx/store

2. **Providen des States**:  
   Der Provider befindet sich im State-Ordner und stellt den Slice im Store der Anwendung bereit.

```typescript
export const appConfig: ApplicationConfig = {
  providers: [
    provideProcessLineState(),
    // weitere States
  ],
};
```

3. **KonfigurationsDatei erstellen**:
   Diese Komponente benötigt eine Konfigurationsdatei um richtig zu funktionieren. Fügre eine ProcessLine.config.ts in der Anwendung hinzu, welche dem Schema des Types ProcessLineElement[] entspricht

4. **Konfigurationsdaten in Store laden**
   Innerhalb der app.component wird die Konfigdatei importiert und über die Aktion setProcessLineElements in den Store geladen.

```typescript
  ngOnInit() {
 this.store.dispatch(
      setProcessLineElements({ processLineElements: processLineElements })
    );
   // weiter dispatches andere Konfigurationen
  }

```
