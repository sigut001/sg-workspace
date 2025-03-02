import { Costs, orderDetails, Image, Video } from '@sg-shared-librarys/models';

import {
  chooseableColors,
  MaterialType,
  ProcessType,
} from '../config-files/production.config';

// Interfaces zur Erstellung von Inhalten für die Webseite

// *** Material und Eigenschaften ***
export interface Material {
  type: MaterialType;

  informations: {
    label: string; // Ausgeschriebener Name des Materials
    oneLineDescription: string; // Kurzbeschreibung des Materials
    path: string; // URL-Pfad für Detailseite

    // Gruppierung: Medieninhalte
    media: {
      heroImage: { url: string; altText: string }; // Hero-Bild mit Alt-Text
      mainImage: { url: string; altText: string }; // Hauptbild mit Alt-Text
      mainVideo: { url: string; description: string }; // Hauptvideo mit Beschreibung
      additionalImages?: { url: string; altText: string }[]; // Zusätzliche Bilder
      additionalVideos?: { url: string; description: string }[]; // Zusätzliche Videos
    };

    // Gruppierung: Zusammenfassung & Eigenschaften
    summary: {
      descriptions?: string[]; // Beschreibung des Materials in Absätzen
      advantages?: string[]; // Vorteile des Materials
      disadvantages?: string[]; // Nachteile des Materials
      suitableProcesses: ProcessType[]; // Unterstützte Druckverfahren
      chooseableColors: chooseableColors[]; // Wählbare Farben
      useCases?: string[]; // Typische Anwendungsfälle
      recommendedFor?: string; // Empfohlene Anwendung
      costRange?: string; // Kostenbereich
      durability?: string; // Haltbarkeit / Widerstandsfähigkeit
      flexibility?: string; // Flexibilität des Materials
    };

    // Gruppierung: Technische Details
    technicalDetails: {
      density: { key: string; value: string };
      meltingPoint: { key: string; value: string };
      tensileStrength: { key: string; value: string };
      elongationAtBreak: { key: string; value: string };
      impactResistance: { key: string; value: string };
      thermalResistance: { key: string; value: string };
      flexibility: { key: string; value: string };
      thickness: { key: string; value: string };
    };

    // Gruppierung: Nachhaltigkeit & Umweltfreundlichkeit
    sustainability: {
      biodegradable?: boolean; // Ist das Material biologisch abbaubar?
      recyclable?: boolean; // Kann das Material recycelt werden?
    };

    // Gruppierung: Call to Action Inhalte
    callToAction: {
      paragraph1: string;
      paragraph2: string;
      paragraph3: string;
    };

    // Gruppierung: Abschnittsbasierte Inhalte
    contentSections: {
      header: string; // Titel für den Abschnitt
      paragraphs: string[]; // Mehrere Absätze für den Text
      imageURL: string; // Erstes Bild aus additionalImages
    }[];

    costs?: Costs; // Kostenangaben
  };
}

// *** Prozesse und Verfahren ***
export interface Process {
  type: ProcessType;
  informations: {
    label: string; // Ausgeschriebener Name
    oneLineDescription: string; // Kurzbeschreibung des Verfahrens
    numberCompletedProjects: string; // Anzahl abgeschlossener Projekte
    path: string; // URL-Pfad für Detailseite

    // Gruppierung: Medieninhalte
    media: {
      heroImage: { url: string; altText: string }; // Hero-Bild mit Alt-Text
      mainImage: { url: string; altText: string }; // Hauptbild mit Alt-Text
      mainVideo: { url: string; description: string }; // Hauptvideo mit Beschreibung
      additionalImages?: { url: string; altText: string }[]; // Zusätzliche Bilder
      additionalVideos?: { url: string; description: string }[]; // Zusätzliche Videos
    };

    // Gruppierung: Zusammenfassung & Eigenschaften
    summary: {
      descriptions?: string[]; // Beschreibungen des Druckverfahrens in Absätzen
      advantages?: string[]; // Vorteile des Verfahrens
      disadvantages?: string[]; // Nachteile des Verfahrens
      suitableMaterials: MaterialType[]; // Unterstützte Materialien
      useCases?: string[]; // Typische Anwendungsfälle
      recommendedFor?: string; // Empfohlene Anwendung
      costRange?: string; // Kostenbereich
      precision?: string; // Maßgenauigkeit
      productionSpeed?: string; // Produktionsgeschwindigkeit
    };

    // Gruppierung: Technische Details
    technicalDetails: {
      maximaleBaugroesse: { key: string; value: string };
      standardVorlaufzeiten: { key: string; value: string };
      massGenauigkeit: { key: string; value: string };
      schichtStaerke: { key: string; value: string };
      mindestMerkmalsgroesse: { key: string; value: string };
    };

    // Gruppierung: Call to Action Inhalte
    callToAction: {
      paragraph1: string;
      paragraph2: string;
      paragraph3: string;
    };

    // Gruppierung: Abschnittsbasierte Inhalte
    contentSections: {
      header: string; // Titel für den Abschnitt
      paragraphs: string[]; // Mehrere Absätze für den Text
      imageURL: string; // Erstes Bild aus additionalImages
    }[];
  };
}

// *** Finishing und Nachbearbeitung ***
export interface FinishingProcessType {
  type: string;
  infomations: {
    description?: string; // Beschreibung des Nachbearbeitungsverfahrens
    materialsCompatible?: MaterialType[]; // Materialien, die für dieses Verfahren geeignet sind
    purpose?: string; // Zweck der Nachbehandlung, z. B. "Verbesserung der Oberfläche"
    estimatedTime?: string; // Geschätzte Zeit für die Nachbehandlung
    costImpact?: string; // Einfluss auf die Kosten, z. B. "gering", "mittel", "hoch"
    images?: Image[]; // Bilder des Verfahrens oder Ergebnisse
    videos?: Video[]; // Videos des Verfahrens oder Ergebnisse
    color?: string; // Farbe muss angegeben werden}
  };
}

// Interfaces für das spätere Aufnehmen von Bestellungen, dienen nicht für die Configuration von Inhalten der Webseite

// *** Produktionsverfahren ***
export interface ProcedureParams {
  infillDensity?: number; // Fülldichte in %, z. B. 20, 50, 100
  infillPattern?: string[]; // Füllmuster
  layerHeight?: number; // Schichthöhe in mm, z. B. 0.1, 0.2
}

// Vorbereitete Metadaten für Finishing-Typen
export interface ThreeDPrintOrderDetails extends orderDetails {
  stlFile: File;
  image?: Image;
  label: string;
  material: Material;
  processType: ProcessType;
  procedureParams: ProcedureParams;
  finishing: FinishingProcessType[];
  userNote?: string;
}
