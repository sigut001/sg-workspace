# Komponente: `aboutUs1Component`

## Übersicht

Die `aboutUs1Component`-Komponente ist Teil der `sg-library` und stellt einen Header bereit, der sowohl für Desktop als auch für Mobile genutzt werden kann. Die einzelnen Komponenten greifen hierbei auf einen eigenen Slice im NGRX Store zu. Aus diesem Grund ist es eine Voraussetzung, dass beim Einbinden dieser Komponente in eine Anwendung in der `app.component` die notwendigen Daten in den Store geladen werden und in der `app.config.ts` der FeatureState bereitgestellt wird.

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
    provideCompanyInformationsState(),
    // weitere States
  ],
};
```

3. **KonfigurationsDatei erstellen**:
   Diese Komponente benötigt eine Konfigurationsdatei mit zwe Objekten mit den Typen: JobPositions, CompanyInformations, um richtig zu funktionieren.
   Füge eine company-Informations.config.ts in der Anwendung hinzu, welche dem Schema der Typen: JobPositions, CompanyInformations entspricht.

4. **Konfigurationsdaten in Store laden**
   Innerhalb der app.component wird die Konfigdatei importiert und über die Aktionen setCompanyInformations und setJobPositions in den Store geladen.

```typescript
  ngOnInit() {
     this.store.dispatch(
      setCompanyInformations({ companyInformations: companyInformations })
    );
    this.store.dispatch(setJobPositions({ jobPositions: jobPositions }));
   // weiter dispatches andere Konfigurationen
  }

```
