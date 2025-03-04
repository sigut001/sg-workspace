import {
  FinishingProcessType,
  Material,
  Process,
} from '../models/production-content.model';

export type chooseableColors = {
  label: string;
  hex: string;
};
export const allChooseableColors = {
  // Standard chooseableColorss
  black: { label: 'Black', hex: '#000000' },
  white: { label: 'White', hex: '#FFFFFF' },
  gray: { label: 'Gray', hex: '#808080' },
  lightGray: { label: 'Light Gray', hex: '#D3D3D3' },
  darkGray: { label: 'Dark Gray', hex: '#4B4B4B' },
  red: { label: 'Red', hex: '#FF0000' },
  green: { label: 'Green', hex: '#00FF00' },
  blue: { label: 'Blue', hex: '#0000FF' },
  yellow: { label: 'Yellow', hex: '#FFFF00' },
  orange: { label: 'Orange', hex: '#FFA500' },
  purple: { label: 'Purple', hex: '#800080' },
  pink: { label: 'Pink', hex: '#FFC0CB' },

  // Metallic chooseableColorss
  silver: { label: 'Silver', hex: '#C0C0C0' },
  gold: { label: 'Gold', hex: '#FFD700' },
  copper: { label: 'Copper', hex: '#B87333' },
  bronze: { label: 'Bronze', hex: '#CD7F32' },
  gunmetal: { label: 'Gunmetal', hex: '#2A3439' },

  // Pastel chooseableColorss
  pastelPink: { label: 'Pastel Pink', hex: '#FFD1DC' },
  pastelBlue: { label: 'Pastel Blue', hex: '#AEC6CF' },
  pastelGreen: { label: 'Pastel Green', hex: '#77DD77' },
  pastelYellow: { label: 'Pastel Yellow', hex: '#FDFD96' },
  pastelPurple: { label: 'Pastel Purple', hex: '#B39EB5' },

  // Neon chooseableColorss
  neonGreen: { label: 'Neon Green', hex: '#39FF14' },
  neonPink: { label: 'Neon Pink', hex: '#FF6EC7' },
  neonYellow: { label: 'Neon Yellow', hex: '#FFFF33' },
  neonOrange: { label: 'Neon Orange', hex: '#FF5F1F' },
  neonBlue: { label: 'Neon Blue', hex: '#1F51FF' },

  // Transparent/Translucent chooseableColorss
  transparent: { label: 'Transparent', hex: '#FFFFFF00' },
  translucentRed: { label: 'Translucent Red', hex: '#FF634700' },
  translucentBlue: { label: 'Translucent Blue', hex: '#4682B400' },
  translucentGreen: { label: 'Translucent Green', hex: '#32CD3200' },
  translucentPurple: { label: 'Translucent Purple', hex: '#80008000' },

  // Wood chooseableColorss
  woodLight: { label: 'Light Wood', hex: '#DEB887' },
  woodDark: { label: 'Dark Wood', hex: '#8B4513' },

  // Specialty chooseableColorss
  glowInTheDark: { label: 'Glow in the Dark', hex: '#9EFF2E' },
  marble: { label: 'Marble', hex: '#F0E5DE' },
  rainbow: { label: 'Rainbow', hex: '#FF4500' },
  carbonFiber: { label: 'Carbon Fiber', hex: '#333333' },

  // Skin Tones
  skinLight: { label: 'Light Skin Tone', hex: '#FAD6A5' },
  skinMedium: { label: 'Medium Skin Tone', hex: '#D2A377' },
  skinDark: { label: 'Dark Skin Tone', hex: '#8D5524' },

  // Earthy Tones
  sand: { label: 'Sand', hex: '#C2B280' },
  olive: { label: 'Olive', hex: '#808000' },
  brown: { label: 'Brown', hex: '#8B4513' },
  khaki: { label: 'Khaki', hex: '#F0E68C' },
  terracotta: { label: 'Terracotta', hex: '#E2725B' },
};
export const materialTypes = {
  PLA: { name: 'Polylactid (PLA)', path: 'pla' },
  AbsLikeResin: { name: 'ABS-ähnliches Resin', path: 'abs-like-resin' },
  TpuLikeResin: { name: 'TPU-ähnliches Resin', path: 'tpu-like-resin' },
  ASA: { name: 'Acrylnitril-Styrol-Acrylat (ASA)', path: 'asa' },
  TPU: { name: 'Thermoplastisches Polyurethan (TPU)', path: 'tpu' },
  PETG: { name: 'Polyethylenterephthalat-Glykol (PETG)', path: 'petg' },
  ABS: { name: 'Acrylnitril-Butadien-Styrol (ABS)', path: 'abs' },
  ABS_CF_GF: { name: 'ABS mit Kohlenstoff- und Glasfasern', path: 'abs-cf-gf' },
  PA6_CF_GF: {
    name: 'Polyamid 6 mit Kohlenstoff- und Glasfasern',
    path: 'pa6-cf-gf',
  },
  Resin: { name: 'Harz (Resin)', path: 'resin' },
  Nylon: { name: 'Nylon (Polyamid)', path: 'nylon' },
  Metall: { name: 'Metall', path: 'metall' },
  Keramik: { name: 'Keramik', path: 'keramik' },
} as const;

export type MaterialType = (typeof materialTypes)[keyof typeof materialTypes];
export const TechnicalDetailMaterialLabels = {
  density: 'Dichte',
  meltingPoint: 'Schmelzpunkt',
  tensileStrength: 'Zugfestigkeit',
  elongationAtBreak: 'Bruchdehnung',
  impactResistance: 'Schlagfestigkeit',
  thermalResistance: 'Wärmebeständigkeit',
  flexibility: 'Flexibilität',
  thickness: 'Filamentdurchmesser',
} as const;

export type TechnicalDetailMaterialLabel =
  (typeof TechnicalDetailMaterialLabels)[keyof typeof TechnicalDetailMaterialLabels];
export const processTypes = {
  FDM_small_scale: { name: 'FDM_small_scale', path: 'fdm-small' },
  FDM_big_scale: { name: 'FDM_big_scale', path: 'fdm-big-scale' },
  SLA: { name: 'SLA', path: 'sla' },
  SLS: { name: 'SLS', path: 'sls' },
  DLP: { name: 'DLP', path: 'dlp' },
  MJF: { name: 'MJF', path: 'mjf' },
  EBM: { name: 'EBM', path: 'ebm' },
  SLM: { name: 'SLM', path: 'slm' },
} as const;
export type ProcessType = (typeof processTypes)[keyof typeof processTypes];

export const TechnicalDetailProcessLabels = {
  maximaleBaugroesse: 'Maximale Baugr.',
  standardVorlaufzeiten: 'Vorlaufzeiten',
  massGenauigkeit: 'Maßgenauigkeit',
  schichtStaerke: 'Schichtstärke',
  mindestMerkmalsgroesse: 'Mind.-Merkmalgr.',
} as const;

export type TechnicalDetailProcessLabel =
  (typeof TechnicalDetailProcessLabels)[keyof typeof TechnicalDetailProcessLabels];

export const materials: Material[] = [
  {
    type: materialTypes.PLA,
    informations: {
      label: 'PLA (Polylactid)',
      oneLineDescription:
        'Einfach zu drucken, biologisch abbaubar und vielseitig einsetzbar.',
      path: 'pla',
      media: {
        heroImage: {
          url: 'https://firebasestorage.googleapis.com/v0/b/trabbis3dprintservice.firebasestorage.app/o/website-media%2Fpexels-jakubzerdzicki-19376296.jpg?alt=media&token=bb240385-bc1b-4aee-be50-418a7a50d6b0',
          altText: 'PLA Filament',
        },
        mainImage: {
          url: 'https://firebasestorage.googleapis.com/v0/b/trabbis3dprintservice.firebasestorage.app/o/website-media%2Fpexels-jakubzerdzicki-18428283.jpg?alt=media&token=272d6912-015a-4ee8-a967-5f028f833a3e',
          altText: 'PLA Filament',
        },
        mainVideo: { url: '', description: '' },
        additionalImages: [],
        additionalVideos: [],
      },
      summary: {
        descriptions: [
          'PLA ist eines der am häufigsten verwendeten 3D-Druckmaterialien und überzeugt durch seine einfache Handhabung.',
          'Das Material hat eine geringe Verzugsneigung und benötigt keine beheizte Druckplatte.',
          'Es ist biologisch abbaubar und daher eine umweltfreundliche Option für viele Anwendungen.',
        ],
        advantages: [
          'Einfache Verarbeitung',
          'Geringes Warping',
          'Große Auswahl an Farben',
        ],
        disadvantages: [
          'Weniger temperaturbeständig als ABS oder Nylon',
          'Brüchiger bei mechanischer Belastung',
        ],
        suitableProcesses: [
          processTypes.FDM_big_scale,
          processTypes.FDM_small_scale,
        ],
        chooseableColors: Object.values(allChooseableColors),
        useCases: ['Prototyping', 'Modellbau', 'Spielzeugherstellung'],
        recommendedFor: 'Hobby-Drucker und Einsteiger',
        costRange: '€',
        durability: 'Mittel',
        flexibility: 'Gering',
      },
      technicalDetails: {
        density: { key: 'Dichte', value: '1.25 g/cm³' },
        meltingPoint: { key: 'Schmelzpunkt', value: '190°C' },
        tensileStrength: { key: 'Zugfestigkeit', value: '60 MPa' },
        elongationAtBreak: { key: 'Bruchdehnung', value: '6%' },
        impactResistance: { key: 'Schlagfestigkeit', value: '2.5 kJ/m²' },
        thermalResistance: { key: 'Wärmebeständigkeit', value: '60°C' },
        flexibility: { key: 'Flexibilität', value: '3/10' },
        thickness: { key: 'Filamentdurchmesser', value: '1.75 mm, 2.85 mm' },
        colors: { key: 'Farben', value: 'jegliche auf Anfrage' },
      },
      sustainability: {
        biodegradable: true,
        recyclable: false,
      },
      callToAction: {
        paragraph1:
          'Starte mit PLA – dem idealen Material für Einsteiger und Profis!',
        paragraph2:
          'Perfekt für detailreiche Modelle, umweltfreundlich und leicht zu drucken.',
        paragraph3:
          'Sichere dir jetzt dein PLA-Filament in deiner Wunschfarbe!',
      },
      contentSections: [
        {
          header: 'Einfache Verarbeitung – Ideal für Einsteiger',
          paragraphs: [
            'PLA ist eines der am einfachsten zu verarbeitenden 3D-Druckmaterialien. Es bietet eine hervorragende Druckqualität und ist besonders für Anfänger geeignet.',
            'Im Vergleich zu anderen Materialien benötigt PLA keine beheizte Druckplatte und verzieht sich kaum. Dadurch sind Drucke mit hoher Präzision und feinen Details möglich.',
            'Es eignet sich für eine Vielzahl von Anwendungen, von Prototypen bis hin zu dekorativen Modellen, da es sich einfach schleifen, bemalen und nachbearbeiten lässt.',
          ],
          imageURL:
            'https://firebasestorage.googleapis.com/v0/b/trabbis3dprintservice.firebasestorage.app/o/website-media%2Fpexels-jakubzerdzicki-20341728.jpg?alt=media&token=ca92bf82-d941-4ec2-8b4a-488042774e09',
        },
        {
          header: 'Umweltfreundlich und nachhaltig',
          paragraphs: [
            'PLA besteht aus nachwachsenden Rohstoffen wie Maisstärke oder Zuckerrohr, was es zu einer der umweltfreundlichsten Optionen im 3D-Druck macht.',
            'Das Material ist biologisch abbaubar, wodurch es eine nachhaltige Alternative zu herkömmlichen Kunststoffen darstellt. Besonders für umweltbewusste Maker ist PLA daher eine hervorragende Wahl.',
            'Trotz seiner Abbaubarkeit bleibt PLA bei normalen Bedingungen stabil und langlebig. Dies macht es ideal für dekorative Objekte, Modelle und andere Anwendungen mit geringer mechanischer Belastung.',
          ],
          imageURL:
            'https://firebasestorage.googleapis.com/v0/b/trabbis3dprintservice.firebasestorage.app/o/website-media%2Fpla_sustainability.jpg?alt=media',
        },
        {
          header: 'Vielseitige Anwendungsmöglichkeiten',
          paragraphs: [
            'PLA wird in zahlreichen Bereichen eingesetzt – von der Spielzeugherstellung über Architekturmodelle bis hin zu personalisierten Haushaltsgegenständen.',
            'Dank der hohen Verfügbarkeit in verschiedenen Farben und Spezialvarianten (z. B. Holz- oder Metalloptik) lassen sich kreative Projekte mit einzigartigen Designs realisieren.',
            'Es eignet sich sowohl für funktionale als auch für ästhetische Anwendungen, da es detailreiche und optisch ansprechende Ergebnisse liefert.',
          ],
          imageURL:
            'https://firebasestorage.googleapis.com/v0/b/trabbis3dprintservice.firebasestorage.app/o/website-media%2Fpla_applications.jpg?alt=media',
        },
        {
          header: 'Technische Eigenschaften und Grenzen',
          paragraphs: [
            'PLA überzeugt durch eine hohe Detailgenauigkeit und Steifigkeit, hat jedoch eine geringere Hitzebeständigkeit als ABS oder Nylon.',
            'Bei Temperaturen über 60°C kann PLA erweichen, was es für Anwendungen mit hoher thermischer Belastung ungeeignet macht.',
            'Mechanisch ist PLA etwas spröder als andere Kunststoffe, weshalb es für belastbare Bauteile oder bewegliche Komponenten weniger geeignet ist. Dennoch bleibt es für viele statische Anwendungen und dekorative Objekte eine Top-Wahl.',
          ],
          imageURL:
            'https://firebasestorage.googleapis.com/v0/b/trabbis3dprintservice.firebasestorage.app/o/website-media%2Fpla_technical.jpg?alt=media',
        },
      ],
      costs: {
        priceEntry: [
          {
            quantity: 1,
            price: '19.99',
            calculationType: 'perRoll',
            unit: '/Rolle',
            currency: '€',
          },
        ],
      },
    },
  },
  {
    type: materialTypes.ABS,
    informations: {
      label: 'ABS (Acrylnitril-Butadien-Styrol)',
      oneLineDescription:
        'Robust, temperaturbeständig und für technische Anwendungen geeignet.',
      path: 'abs',
      media: {
        heroImage: {
          url: 'https://firebasestorage.googleapis.com/v0/b/trabbis3dprintservice.firebasestorage.app/o/website-media%2Fpexels-jakubzerdzicki-19376296.jpg?alt=media&token=bb240385-bc1b-4aee-be50-418a7a50d6b0',
          altText: 'ABS Filament',
        },
        mainImage: {
          url: 'https://firebasestorage.googleapis.com/v0/b/trabbis3dprintservice.firebasestorage.app/o/website-media%2Fpexels-jakubzerdzicki-19376296.jpg?alt=media&token=bb240385-bc1b-4aee-be50-418a7a50d6b0',
          altText: 'ABS Filament',
        },
        mainVideo: { url: '', description: '' },
        additionalImages: [],
        additionalVideos: [],
      },
      summary: {
        descriptions: [
          'ABS ist ein beliebtes Material für technische Anwendungen aufgrund seiner hohen Schlagfestigkeit.',
          'Es benötigt eine beheizte Druckplatte und tendiert zu Warping.',
        ],
        advantages: [
          'Hohe Temperaturbeständigkeit',
          'Gute mechanische Eigenschaften',
        ],
        disadvantages: ['Warping', 'Benötigt geschlossene Druckumgebung'],
        suitableProcesses: [
          processTypes.FDM_big_scale,
          processTypes.FDM_small_scale,
        ],
        chooseableColors: Object.values(allChooseableColors),
        useCases: ['Technische Bauteile', 'Gehäuse', 'Mechanische Prototypen'],
        recommendedFor: 'Erfahrene Drucker mit geschlossener Kammer',
        costRange: '€€',
        durability: 'Hoch',
        flexibility: 'Mittel',
      },
      technicalDetails: {
        density: { key: 'Dichte', value: '1.04 g/cm³' },
        meltingPoint: { key: 'Schmelzpunkt', value: '220°C' },
        tensileStrength: { key: 'Zugfestigkeit', value: '40 MPa' },
        elongationAtBreak: { key: 'Bruchdehnung', value: '10%' },
        impactResistance: { key: 'Schlagfestigkeit', value: '10 kJ/m²' },
        thermalResistance: { key: 'Wärmebeständigkeit', value: '85°C' },
        flexibility: { key: 'Flexibilität', value: '5/10' },
        thickness: { key: 'Filamentdurchmesser', value: '1.75 mm, 2.85 mm' },
        colors: { key: 'Farben', value: 'jegliche auf Anfrage' },
      },
      sustainability: {
        biodegradable: false,
        recyclable: true,
      },
      callToAction: {
        paragraph1: 'Setze auf ABS für stabile und langlebige Bauteile!',
        paragraph2:
          'Ideal für funktionale Prototypen und technische Komponenten.',
        paragraph3: 'Jetzt dein ABS-Filament in deiner Wunschfarbe sichern!',
      },
      contentSections: [
        {
          header: 'Anwendungsbereiche und Einsatzmöglichkeiten',
          paragraphs: [
            'ABS ist eines der meistgenutzten Materialien für technische und funktionale 3D-Drucke.',
            'Es eignet sich besonders für mechanische Prototypen, Gehäuse und widerstandsfähige Bauteile.',
            'Dank seiner hohen Schlagfestigkeit wird es in der Automobilindustrie, im Maschinenbau und in der Elektronik verwendet.',
          ],
          imageURL:
            'https://firebasestorage.googleapis.com/v0/b/trabbis3dprintservice.firebasestorage.app/o/website-media%2Fpexels-jakubzerdzicki-19376296.jpg?alt=media&token=bb240385-bc1b-4aee-be50-418a7a50d6b0',
        },
        {
          header: 'Technische Vorteile und Eigenschaften',
          paragraphs: [
            'ABS ist temperaturbeständig bis zu 85°C und bietet eine hohe mechanische Belastbarkeit.',
            'Es ist widerstandsfähig gegenüber Stößen und kann nachträglich mit Aceton geglättet werden, um eine glänzende Oberfläche zu erzielen.',
            'Trotz seiner Vorteile benötigt ABS eine beheizte Druckplatte und eine geschlossene Druckkammer, um Warping zu vermeiden.',
          ],
          imageURL:
            'https://firebasestorage.googleapis.com/v0/b/trabbis3dprintservice.firebasestorage.app/o/website-media%2Fpexels-jakubzerdzicki-19376296.jpg?alt=media&token=bb240385-bc1b-4aee-be50-418a7a50d6b0',
        },
        {
          header: 'Vergleich mit anderen 3D-Druckmaterialien',
          paragraphs: [
            'Im Vergleich zu PLA ist ABS stabiler und hitzebeständiger, erfordert jedoch anspruchsvollere Druckbedingungen.',
            'Gegenüber PETG ist ABS fester und leichter nachbearbeitbar, hat aber eine stärkere Neigung zu Warping.',
            'Für Anwendungen, die hohe Festigkeit und Temperaturbeständigkeit benötigen, ist ABS die bevorzugte Wahl.',
          ],
          imageURL:
            'https://firebasestorage.googleapis.com/v0/b/trabbis3dprintservice.firebasestorage.app/o/website-media%2Fpexels-jakubzerdzicki-19376296.jpg?alt=media&token=bb240385-bc1b-4aee-be50-418a7a50d6b0',
        },
        {
          header: 'Tipps zur Verarbeitung und Nachbearbeitung',
          paragraphs: [
            'ABS sollte in einer geschlossenen Druckkammer bei Temperaturen von mindestens 220°C gedruckt werden, um optimale Ergebnisse zu erzielen.',
            'Eine beheizte Druckplatte bei etwa 100°C hilft, Warping zu reduzieren und eine bessere Haftung zu gewährleisten.',
            'Nachbearbeitung durch Acetondampf sorgt für eine glatte, glänzende Oberfläche und verbessert die mechanische Stabilität.',
          ],
          imageURL:
            'https://firebasestorage.googleapis.com/v0/b/trabbis3dprintservice.firebasestorage.app/o/website-media%2Fpexels-jakubzerdzicki-19376296.jpg?alt=media&token=bb240385-bc1b-4aee-be50-418a7a50d6b0',
        },
      ],
      costs: {
        priceEntry: [
          {
            quantity: 1,
            price: '24.99',
            calculationType: 'perRoll',
            unit: '/Rolle',
            currency: '€',
          },
        ],
      },
    },
  },
  {
    type: materialTypes.ABS_CF_GF,
    informations: {
      label: 'ABS mit Carbon- oder Glasfaser',
      oneLineDescription:
        'Verstärktes ABS für höhere Festigkeit, Steifigkeit und Temperaturbeständigkeit.',
      path: 'abs-cf-gf',
      media: {
        heroImage: {
          url: 'https://firebasestorage.googleapis.com/v0/b/trabbis3dprintservice.firebasestorage.app/o/website-media%2Fpexels-jakubzerdzicki-19376296.jpg?alt=media&token=bb240385-bc1b-4aee-be50-418a7a50d6b0',
          altText: 'ABS CF / GF Filament',
        },
        mainImage: {
          url: 'https://firebasestorage.googleapis.com/v0/b/trabbis3dprintservice.firebasestorage.app/o/website-media%2Fpexels-jakubzerdzicki-19376296.jpg?alt=media&token=bb240385-bc1b-4aee-be50-418a7a50d6b0',
          altText: 'ABS CF / GF Filament',
        },
        mainVideo: { url: '', description: '' },
        additionalImages: [],
        additionalVideos: [],
      },
      summary: {
        descriptions: [
          'ABS CF / GF ist eine verstärkte Version von ABS mit Carbon- oder Glasfasern für höhere mechanische Eigenschaften.',
          'Es bietet eine verbesserte Temperaturbeständigkeit und geringere Verformung.',
          'Ideal für technische Bauteile mit hohen Anforderungen an Stabilität und Steifigkeit.',
        ],
        advantages: [
          'Sehr hohe Festigkeit und Steifigkeit',
          'Hohe Temperaturbeständigkeit',
          'Geringeres Warping als reguläres ABS',
        ],
        disadvantages: [
          'Erfordert eine geschlossene Druckkammer',
          'Kann Druckdüsen schneller abnutzen',
        ],
        suitableProcesses: [
          processTypes.FDM_big_scale,
          processTypes.FDM_small_scale,
        ],
        chooseableColors: Object.values(allChooseableColors),
        useCases: [
          'Industriebauteile',
          'Funktionsprototypen',
          'Mechanische Komponenten',
        ],
        recommendedFor: 'Erfahrene Anwender mit hochleistungsfähigen Druckern',
        costRange: '€€€',
        durability: 'Sehr hoch',
        flexibility: 'Gering',
      },
      technicalDetails: {
        density: { key: 'Dichte', value: '1.10 g/cm³' },
        meltingPoint: { key: 'Schmelzpunkt', value: '240°C' },
        tensileStrength: { key: 'Zugfestigkeit', value: '80 MPa' },
        elongationAtBreak: { key: 'Bruchdehnung', value: '5%' },
        impactResistance: { key: 'Schlagfestigkeit', value: '9 kJ/m²' },
        thermalResistance: { key: 'Wärmebeständigkeit', value: '100°C' },
        flexibility: { key: 'Flexibilität', value: '2/10' },
        thickness: { key: 'Filamentdurchmesser', value: '1.75 mm, 2.85 mm' },
        colors: { key: 'Farben', value: 'jegliche auf Anfrage' },
      },
      sustainability: {
        biodegradable: false,
        recyclable: true,
      },
      callToAction: {
        paragraph1: 'Nutze ABS CF / GF für hochbelastbare, präzise Bauteile!',
        paragraph2:
          'Dank Carbon- oder Glasfaser bietet es maximale Stabilität und Temperaturbeständigkeit.',
        paragraph3:
          'Jetzt dein Hochleistungs-Filament in deiner Wunschfarbe sichern!',
      },
      contentSections: [
        {
          header: 'Anwendungsbereiche und Einsatzmöglichkeiten',
          paragraphs: [
            'ABS CF / GF eignet sich perfekt für Anwendungen, die hohe mechanische Festigkeit und Temperaturbeständigkeit erfordern.',
            'Dank der Carbon- oder Glasfaserverstärkung ist es ideal für industrielle Bauteile, funktionale Prototypen und mechanisch belastbare Konstruktionen.',
            'Es wird häufig für Strukturkomponenten, Gehäuse, Halterungen und Bauteile in der Automobil- oder Luftfahrtbranche verwendet.',
          ],
          imageURL:
            'https://firebasestorage.googleapis.com/v0/b/trabbis3dprintservice.firebasestorage.app/o/website-media%2Fpexels-jakubzerdzicki-19376296.jpg?alt=media&token=bb240385-bc1b-4aee-be50-418a7a50d6b0',
        },
        {
          header: 'Technische Vorteile und Eigenschaften',
          paragraphs: [
            'ABS CF / GF bietet eine deutlich höhere Steifigkeit und Schlagfestigkeit als herkömmliches ABS.',
            'Die verstärkte Struktur minimiert Warping und sorgt für präzisere Druckergebnisse, selbst bei großen Bauteilen.',
            'Mit einer Wärmebeständigkeit von bis zu 100°C ist es besonders für Anwendungen mit hohen Temperaturen geeignet.',
          ],
          imageURL:
            'https://firebasestorage.googleapis.com/v0/b/trabbis3dprintservice.firebasestorage.app/o/website-media%2Fpexels-jakubzerdzicki-19376296.jpg?alt=media&token=bb240385-bc1b-4aee-be50-418a7a50d6b0',
        },
        {
          header: 'Vergleich mit Standard-ABS und anderen Materialien',
          paragraphs: [
            'Im Vergleich zu Standard-ABS bietet ABS CF / GF eine verbesserte Steifigkeit und geringere Verformung beim Drucken.',
            'Gegenüber PLA ist es mechanisch stabiler und hitzebeständiger, jedoch anspruchsvoller in der Verarbeitung.',
            'Im Gegensatz zu PA6 CF / GF ist es einfacher zu drucken, bietet jedoch nicht dieselbe Zähigkeit und Temperaturbeständigkeit.',
          ],
          imageURL:
            'https://firebasestorage.googleapis.com/v0/b/trabbis3dprintservice.firebasestorage.app/o/website-media%2Fpexels-jakubzerdzicki-19376296.jpg?alt=media&token=bb240385-bc1b-4aee-be50-418a7a50d6b0',
        },
        {
          header: 'Tipps zur Verarbeitung und Nachbearbeitung',
          paragraphs: [
            'Für den Druck mit ABS CF / GF ist eine geschlossene Druckkammer empfohlen, um Warping zu reduzieren.',
            'Die Carbon- oder Glasfasern erhöhen den Verschleiß der Druckdüse, daher sollten gehärtete oder beschichtete Düsen verwendet werden.',
            'Nachbearbeitungen wie Bohren, Schleifen oder chemisches Glätten mit Aceton sind möglich und verbessern die Oberflächenqualität.',
          ],
          imageURL:
            'https://firebasestorage.googleapis.com/v0/b/trabbis3dprintservice.firebasestorage.app/o/website-media%2Fpexels-jakubzerdzicki-19376296.jpg?alt=media&token=bb240385-bc1b-4aee-be50-418a7a50d6b0',
        },
      ],
      costs: {
        priceEntry: [
          {
            quantity: 1,
            price: '39.99',
            calculationType: 'perRoll',
            unit: '/Rolle',
            currency: '€',
          },
        ],
      },
    },
  },
  {
    type: materialTypes.PA6_CF_GF,
    informations: {
      label: 'PA6 mit Carbon- oder Glasfaser',
      oneLineDescription:
        'Hochfeste und temperaturbeständige Nylon-Variante mit Carbon- oder Glasfasern.',
      path: 'pa6-cf-gf',
      media: {
        heroImage: {
          url: 'https://firebasestorage.googleapis.com/v0/b/trabbis3dprintservice.firebasestorage.app/o/website-media%2Fpexels-jakubzerdzicki-19376296.jpg?alt=media&token=bb240385-bc1b-4aee-be50-418a7a50d6b0',
          altText: 'PA6 CF / GF Filament',
        },
        mainImage: {
          url: 'https://firebasestorage.googleapis.com/v0/b/trabbis3dprintservice.firebasestorage.app/o/website-media%2Fpexels-jakubzerdzicki-19376296.jpg?alt=media&token=bb240385-bc1b-4aee-be50-418a7a50d6b0',
          altText: 'PA6 CF / GF Filament',
        },
        mainVideo: { url: '', description: '' },
        additionalImages: [],
        additionalVideos: [],
      },
      summary: {
        descriptions: [
          'PA6 CF / GF ist ein verstärktes Nylon-Material mit hervorragenden mechanischen Eigenschaften.',
          'Die Carbon- oder Glasfasern erhöhen die Steifigkeit und Temperaturbeständigkeit.',
          'Ideal für industrielle Anwendungen, die hohe Festigkeit erfordern.',
        ],
        advantages: [
          'Sehr hohe Festigkeit',
          'Hohe Temperaturbeständigkeit',
          'Geringes Warping',
        ],
        disadvantages: [
          'Erfordert hohe Drucktemperaturen',
          'Kann Düsen schneller abnutzen',
        ],
        suitableProcesses: [
          processTypes.FDM_big_scale,
          processTypes.FDM_small_scale,
          processTypes.SLS,
        ],
        chooseableColors: Object.values(allChooseableColors),
        useCases: [
          'Industriebauteile',
          'Funktionsprototypen',
          'Mechanische Komponenten',
        ],
        recommendedFor: 'Erfahrene Drucker mit gehärteten Düsen',
        costRange: '€€€',
        durability: 'Sehr hoch',
        flexibility: 'Gering',
      },
      technicalDetails: {
        density: { key: 'Dichte', value: '1.35 g/cm³' },
        meltingPoint: { key: 'Schmelzpunkt', value: '250°C' },
        tensileStrength: { key: 'Zugfestigkeit', value: '85 MPa' },
        elongationAtBreak: { key: 'Bruchdehnung', value: '3%' },
        impactResistance: { key: 'Schlagfestigkeit', value: '12 kJ/m²' },
        thermalResistance: { key: 'Wärmebeständigkeit', value: '120°C' },
        flexibility: { key: 'Flexibilität', value: '2/10' },
        thickness: { key: 'Filamentdurchmesser', value: '1.75 mm, 2.85 mm' },
        colors: { key: 'Farben', value: 'jegliche auf Anfrage' },
      },
      sustainability: {
        biodegradable: false,
        recyclable: true,
      },
      callToAction: {
        paragraph1:
          'Nutze PA6 CF / GF für industrielle und hochbelastbare Bauteile!',
        paragraph2:
          'Dank Carbon- oder Glasfaser bietet es maximale Stabilität.',
        paragraph3:
          'Jetzt dein Hochleistungs-Filament in deiner Wunschfarbe sichern!',
      },
      contentSections: [
        {
          header: 'Anwendungsbereiche und Einsatzmöglichkeiten',
          paragraphs: [
            'PA6 CF / GF ist ideal für industrielle Anwendungen, die hohe Festigkeit und Temperaturbeständigkeit erfordern.',
            'Dank der Carbon- oder Glasfaserverstärkung eignet es sich für mechanische Komponenten, die stark belastet werden.',
            'Es wird häufig für Funktionsprototypen, Maschinenbauteile und technische Konstruktionen verwendet.',
          ],
          imageURL:
            'https://firebasestorage.googleapis.com/v0/b/trabbis3dprintservice.firebasestorage.app/o/website-media%2Fpexels-jakubzerdzicki-19376296.jpg?alt=media&token=bb240385-bc1b-4aee-be50-418a7a50d6b0',
        },
        {
          header: 'Technische Vorteile und Eigenschaften',
          paragraphs: [
            'Die Carbon- oder Glasfaserverstärkung sorgt für eine außergewöhnliche Steifigkeit und hohe mechanische Belastbarkeit.',
            'Mit einer Wärmebeständigkeit von bis zu 120°C hält PA6 CF / GF hohen Temperaturen stand.',
            'Es neigt zu geringem Warping und hat eine hohe Dimensionsstabilität, wodurch es sich für anspruchsvolle Drucke eignet.',
          ],
          imageURL:
            'https://firebasestorage.googleapis.com/v0/b/trabbis3dprintservice.firebasestorage.app/o/website-media%2Fpexels-jakubzerdzicki-19376296.jpg?alt=media&token=bb240385-bc1b-4aee-be50-418a7a50d6b0',
        },
        {
          header: 'Vergleich mit anderen Hochleistungsmaterialien',
          paragraphs: [
            'PA6 CF / GF bietet eine höhere Festigkeit als Standard-PA6, bleibt jedoch flexibler als reine Carbon-Verbundmaterialien.',
            'Im Vergleich zu ABS ist es deutlich hitzebeständiger und mechanisch belastbarer.',
            'Es ist robuster als PETG und PLA, erfordert aber spezielle Druckbedingungen, wie eine beheizte Kammer und gehärtete Düsen.',
          ],
          imageURL:
            'https://firebasestorage.googleapis.com/v0/b/trabbis3dprintservice.firebasestorage.app/o/website-media%2Fpexels-jakubzerdzicki-19376296.jpg?alt=media&token=bb240385-bc1b-4aee-be50-418a7a50d6b0',
        },
        {
          header: 'Tipps zur Verarbeitung und Nachbearbeitung',
          paragraphs: [
            'PA6 CF / GF benötigt eine hohe Drucktemperatur von mindestens 250°C und eine beheizte Druckplatte, um optimale Ergebnisse zu erzielen.',
            'Da Carbon- oder Glasfasern abrasive Eigenschaften haben, sollten gehärtete oder beschichtete Düsen verwendet werden.',
            'Nachbearbeitungen wie Bohren, Schleifen oder CNC-Bearbeitung sind problemlos möglich und verbessern die Endqualität weiter.',
          ],
          imageURL:
            'https://firebasestorage.googleapis.com/v0/b/trabbis3dprintservice.firebasestorage.app/o/website-media%2Fpexels-jakubzerdzicki-19376296.jpg?alt=media&token=bb240385-bc1b-4aee-be50-418a7a50d6b0',
        },
      ],
      costs: {
        priceEntry: [
          {
            quantity: 1,
            price: '49.99',
            calculationType: 'perRoll',
            unit: '/Rolle',
            currency: '€',
          },
        ],
      },
    },
  },
  {
    type: materialTypes.PETG,
    informations: {
      label: 'PETG (Polyethylenterephthalat-Glykol)',
      oneLineDescription:
        'Robust, flexibel und widerstandsfähig gegen Feuchtigkeit und Chemikalien.',
      path: 'petg',
      media: {
        heroImage: {
          url: 'https://firebasestorage.googleapis.com/v0/b/trabbis3dprintservice.firebasestorage.app/o/website-media%2Fpexels-jakubzerdzicki-19376296.jpg?alt=media&token=bb240385-bc1b-4aee-be50-418a7a50d6b0',
          altText: 'PETG Filament',
        },
        mainImage: {
          url: 'https://firebasestorage.googleapis.com/v0/b/trabbis3dprintservice.firebasestorage.app/o/website-media%2Fpexels-jakubzerdzicki-19376296.jpg?alt=media&token=bb240385-bc1b-4aee-be50-418a7a50d6b0',
          altText: 'PETG Filament',
        },
        mainVideo: { url: '', description: '' },
        additionalImages: [],
        additionalVideos: [],
      },
      summary: {
        descriptions: [
          'PETG ist eine Mischung aus PET und Glykol, wodurch es eine hohe Schlagfestigkeit und Flexibilität aufweist.',
          'Es ist UV-beständig und feuchtigkeitsresistent, ideal für Outdoor-Anwendungen.',
          'PETG bietet ein gutes Gleichgewicht zwischen Stabilität und Druckfreundlichkeit.',
        ],
        advantages: [
          'Sehr haltbar und flexibel',
          'Geringes Warping',
          'Hohe chemische Beständigkeit',
        ],
        disadvantages: [
          'Kann Fäden ziehen (Stringing)',
          'Nicht so hart wie ABS oder Nylon',
        ],
        suitableProcesses: [
          processTypes.FDM_big_scale,
          processTypes.FDM_small_scale,
        ],
        chooseableColors: Object.values(allChooseableColors),
        useCases: [
          'Outdoor-Bauteile',
          'Lebensmittelsichere Anwendungen',
          'Technische Bauteile',
        ],
        recommendedFor:
          'Fortgeschrittene Anwender und industrielle Anwendungen',
        costRange: '€€',
        durability: 'Hoch',
        flexibility: 'Mittel',
      },
      technicalDetails: {
        density: { key: 'Dichte', value: '1.27 g/cm³' },
        meltingPoint: { key: 'Schmelzpunkt', value: '230°C' },
        tensileStrength: { key: 'Zugfestigkeit', value: '50 MPa' },
        elongationAtBreak: { key: 'Bruchdehnung', value: '8%' },
        impactResistance: { key: 'Schlagfestigkeit', value: '9 kJ/m²' },
        thermalResistance: { key: 'Wärmebeständigkeit', value: '75°C' },
        flexibility: { key: 'Flexibilität', value: '6/10' },
        thickness: { key: 'Filamentdurchmesser', value: '1.75 mm, 2.85 mm' },
        colors: { key: 'Farben', value: 'jegliche auf Anfrage' },
      },
      sustainability: {
        biodegradable: false,
        recyclable: true,
      },
      callToAction: {
        paragraph1: 'Entdecke PETG für robuste und flexible Bauteile!',
        paragraph2:
          'Perfekt für Anwendungen mit hohen mechanischen Anforderungen und chemischer Beständigkeit.',
        paragraph3: 'Jetzt dein PETG-Filament in deiner Wunschfarbe sichern!',
      },
      contentSections: [
        {
          header: 'Anwendungsbereiche und Einsatzmöglichkeiten',
          paragraphs: [
            'PETG ist besonders widerstandsfähig gegen Feuchtigkeit und UV-Strahlung, was es ideal für Outdoor-Anwendungen macht.',
            'Es wird häufig für technische Bauteile, Gehäuse, Schutzabdeckungen und sogar lebensmittelsichere Behälter verwendet.',
            'Dank seiner hohen Schlagfestigkeit eignet es sich für mechanisch belastete Konstruktionen, die gleichzeitig eine gewisse Flexibilität benötigen.',
          ],
          imageURL:
            'https://firebasestorage.googleapis.com/v0/b/trabbis3dprintservice.firebasestorage.app/o/website-media%2Fpexels-jakubzerdzicki-19376296.jpg?alt=media&token=bb240385-bc1b-4aee-be50-418a7a50d6b0',
        },
        {
          header: 'Technische Vorteile und Eigenschaften',
          paragraphs: [
            'PETG vereint die einfache Druckbarkeit von PLA mit der Haltbarkeit von ABS und ist daher eine beliebte Wahl für viele Anwendungen.',
            'Es weist eine hohe chemische Beständigkeit auf und ist weniger anfällig für Verformungen während des Drucks.',
            'Durch seine Flexibilität ist PETG weniger spröde als ABS und widersteht mechanischer Belastung besser als PLA.',
          ],
          imageURL:
            'https://firebasestorage.googleapis.com/v0/b/trabbis3dprintservice.firebasestorage.app/o/website-media%2Fpexels-jakubzerdzicki-19376296.jpg?alt=media&token=bb240385-bc1b-4aee-be50-418a7a50d6b0',
        },
        {
          header: 'Vergleich mit anderen 3D-Druckmaterialien',
          paragraphs: [
            'Im Vergleich zu PLA ist PETG widerstandsfähiger gegenüber Hitze und mechanischen Belastungen, bleibt jedoch ähnlich einfach zu drucken.',
            'Gegenüber ABS bietet PETG eine bessere Druckstabilität, da es weniger zum Warping neigt und keine geschlossene Kammer benötigt.',
            'Es ist flexibler als ABS, aber nicht so elastisch wie TPU, wodurch es sich für viele industrielle und technische Anwendungen eignet.',
          ],
          imageURL:
            'https://firebasestorage.googleapis.com/v0/b/trabbis3dprintservice.firebasestorage.app/o/website-media%2Fpexels-jakubzerdzicki-19376296.jpg?alt=media&token=bb240385-bc1b-4aee-be50-418a7a50d6b0',
        },
        {
          header: 'Tipps zur Verarbeitung und Nachbearbeitung',
          paragraphs: [
            'Für den Druck mit PETG empfiehlt sich eine leicht beheizte Druckplatte (ca. 70-80°C), um optimale Haftung zu gewährleisten.',
            'Da PETG zum Fädenziehen neigt, sollten die Retraktionseinstellungen sorgfältig optimiert werden.',
            'Nachbearbeitung durch Schleifen oder Bohren ist problemlos möglich, zudem kann PETG für zusätzliche Stabilität verklebt oder verschweißt werden.',
          ],
          imageURL:
            'https://firebasestorage.googleapis.com/v0/b/trabbis3dprintservice.firebasestorage.app/o/website-media%2Fpexels-jakubzerdzicki-19376296.jpg?alt=media&token=bb240385-bc1b-4aee-be50-418a7a50d6b0',
        },
      ],
      costs: {
        priceEntry: [
          {
            quantity: 1,
            price: '27.99',
            calculationType: 'perRoll',
            unit: '/Rolle',
            currency: '€',
          },
        ],
      },
    },
  },
  {
    type: materialTypes.TPU,
    informations: {
      label: 'TPU (Thermoplastisches Polyurethan)',
      oneLineDescription:
        'Flexibles, stoßfestes und langlebiges Material mit hoher Elastizität.',
      path: 'tpu',
      media: {
        heroImage: {
          url: 'https://firebasestorage.googleapis.com/v0/b/trabbis3dprintservice.firebasestorage.app/o/website-media%2Fpexels-jakubzerdzicki-19376296.jpg?alt=media&token=bb240385-bc1b-4aee-be50-418a7a50d6b0',
          altText: 'TPU Filament',
        },
        mainImage: {
          url: 'https://firebasestorage.googleapis.com/v0/b/trabbis3dprintservice.firebasestorage.app/o/website-media%2Fpexels-jakubzerdzicki-19376296.jpg?alt=media&token=bb240385-bc1b-4aee-be50-418a7a50d6b0',
          altText: 'TPU Filament',
        },
        mainVideo: { url: '', description: '' },
        additionalImages: [],
        additionalVideos: [],
      },
      summary: {
        descriptions: [
          'TPU ist ein flexibles und gummiartiges Material, das für Anwendungen mit hoher Stoßfestigkeit geeignet ist.',
          'Es bietet eine hohe Elastizität, Abriebfestigkeit und chemische Beständigkeit.',
          'Ideal für funktionale Prototypen, Dichtungen und elastische Bauteile.',
        ],
        advantages: [
          'Hohe Flexibilität und Elastizität',
          'Abriebfest und langlebig',
          'Gute Beständigkeit gegen Chemikalien und Öle',
        ],
        disadvantages: [
          'Schwerer zu drucken als starre Materialien',
          'Erfordert langsamere Druckgeschwindigkeiten',
        ],
        suitableProcesses: [
          processTypes.FDM_big_scale,
          processTypes.FDM_small_scale,
        ],
        chooseableColors: Object.values(allChooseableColors),
        useCases: [
          'Stoßdämpfende Bauteile',
          'Dichtungen',
          'Elastische Komponenten',
        ],
        recommendedFor: 'Fortgeschrittene Nutzer mit Direktantriebsdruckern',
        costRange: '€€',
        durability: 'Sehr hoch',
        flexibility: 'Sehr hoch',
      },
      technicalDetails: {
        density: { key: 'Dichte', value: '1.20 g/cm³' },
        meltingPoint: { key: 'Schmelzpunkt', value: '220°C' },
        tensileStrength: { key: 'Zugfestigkeit', value: '30 MPa' },
        elongationAtBreak: { key: 'Bruchdehnung', value: '500%' },
        impactResistance: { key: 'Schlagfestigkeit', value: 'Sehr hoch' },
        thermalResistance: { key: 'Wärmebeständigkeit', value: '80°C' },
        flexibility: { key: 'Flexibilität', value: '10/10' },
        thickness: { key: 'Filamentdurchmesser', value: '1.75 mm, 2.85 mm' },
        colors: { key: 'Farben', value: 'jegliche auf Anfrage' },
      },
      sustainability: {
        biodegradable: false,
        recyclable: true,
      },
      callToAction: {
        paragraph1:
          'Erlebe TPU – das flexible Filament für widerstandsfähige Bauteile!',
        paragraph2:
          'Perfekt für elastische, abriebfeste und stoßdämpfende Anwendungen.',
        paragraph3: 'Sichere dir jetzt TPU-Filament in deiner Wunschfarbe!',
      },
      contentSections: [
        {
          header: 'Anwendungsbereiche und Einsatzmöglichkeiten',
          paragraphs: [
            'TPU ist ideal für Anwendungen, die hohe Flexibilität, Stoßfestigkeit und Abriebfestigkeit erfordern.',
            'Es wird häufig für stoßdämpfende Bauteile, flexible Gehäuse und Dichtungen eingesetzt.',
            'Dank seiner hohen chemischen Beständigkeit eignet es sich auch für technische Anwendungen in anspruchsvollen Umgebungen.',
          ],
          imageURL:
            'https://firebasestorage.googleapis.com/v0/b/trabbis3dprintservice.firebasestorage.app/o/website-media%2Fpexels-jakubzerdzicki-19376296.jpg?alt=media&token=bb240385-bc1b-4aee-be50-418a7a50d6b0',
        },
        {
          header: 'Technische Vorteile und Eigenschaften',
          paragraphs: [
            'TPU kombiniert hohe Elastizität mit ausgezeichneter mechanischer Widerstandsfähigkeit.',
            'Mit einer Bruchdehnung von bis zu 500 % ist es eines der dehnbarsten 3D-Druckmaterialien.',
            'Es bietet zudem eine hervorragende Abriebfestigkeit und bleibt auch bei wiederholter Beanspruchung stabil.',
          ],
          imageURL:
            'https://firebasestorage.googleapis.com/v0/b/trabbis3dprintservice.firebasestorage.app/o/website-media%2Fpexels-jakubzerdzicki-19376296.jpg?alt=media&token=bb240385-bc1b-4aee-be50-418a7a50d6b0',
        },
        {
          header: 'Vergleich mit anderen flexiblen Materialien',
          paragraphs: [
            'Im Vergleich zu Silikon ist TPU belastbarer und einfacher zu drucken.',
            'Gegenüber PLA und ABS bietet es eine wesentlich höhere Elastizität und Stoßdämpfung.',
            'Es ist flexibler als ABS Like Resin, jedoch schwieriger zu drucken als feste Materialien.',
          ],
          imageURL:
            'https://firebasestorage.googleapis.com/v0/b/trabbis3dprintservice.firebasestorage.app/o/website-media%2Fpexels-jakubzerdzicki-19376296.jpg?alt=media&token=bb240385-bc1b-4aee-be50-418a7a50d6b0',
        },
        {
          header: 'Tipps zur Verarbeitung und Nachbearbeitung',
          paragraphs: [
            'Für den Druck von TPU wird ein Direktantriebs-Extruder empfohlen, da Bowden-Extruder Probleme mit der Flexibilität haben können.',
            'Langsamere Druckgeschwindigkeiten und eine optimierte Retraktionseinstellung verhindern Fadenbildung und verbessern die Druckqualität.',
            'Nachbearbeitungen wie Schleifen oder chemisches Glätten sind möglich, erfordern jedoch spezielle Methoden aufgrund der Elastizität des Materials.',
          ],
          imageURL:
            'https://firebasestorage.googleapis.com/v0/b/trabbis3dprintservice.firebasestorage.app/o/website-media%2Fpexels-jakubzerdzicki-19376296.jpg?alt=media&token=bb240385-bc1b-4aee-be50-418a7a50d6b0',
        },
      ],
      costs: {
        priceEntry: [
          {
            quantity: 1,
            price: '34.99',
            calculationType: 'perRoll',
            unit: '/Rolle',
            currency: '€',
          },
        ],
      },
    },
  },
  {
    type: materialTypes.ASA,
    informations: {
      label: 'ASA (Acrylnitril-Styrol-Acrylat)',
      oneLineDescription:
        'Witterungsbeständiges und UV-resistentes Material für den Außeneinsatz.',
      path: 'asa',
      media: {
        heroImage: {
          url: 'https://firebasestorage.googleapis.com/v0/b/trabbis3dprintservice.firebasestorage.app/o/website-media%2Fpexels-jakubzerdzicki-19376296.jpg?alt=media&token=bb240385-bc1b-4aee-be50-418a7a50d6b0',
          altText: 'ASA Filament',
        },
        mainImage: {
          url: 'https://firebasestorage.googleapis.com/v0/b/trabbis3dprintservice.firebasestorage.app/o/website-media%2Fpexels-jakubzerdzicki-19376296.jpg?alt=media&token=bb240385-bc1b-4aee-be50-418a7a50d6b0',
          altText: 'ASA Filament',
        },
        mainVideo: { url: '', description: '' },
        additionalImages: [],
        additionalVideos: [],
      },
      summary: {
        descriptions: [
          'ASA ist ein technisches Material, das sich durch seine hohe UV- und Witterungsbeständigkeit auszeichnet.',
          'Es ist eine Alternative zu ABS, aber weniger anfällig für Vergilbung und Verformung durch Sonneneinstrahlung.',
          'Ideal für den Außeneinsatz und mechanisch belastbare Bauteile.',
        ],
        advantages: [
          'Sehr hohe UV- und Witterungsbeständigkeit',
          'Hohe mechanische Festigkeit',
          'Geringere Schrumpfung als ABS',
        ],
        disadvantages: [
          'Benötigt beheizte Druckplatte und hohe Drucktemperaturen',
          'Kann Warping aufweisen ohne geschlossene Kammer',
        ],
        suitableProcesses: [
          processTypes.FDM_big_scale,
          processTypes.FDM_small_scale,
        ],
        chooseableColors: Object.values(allChooseableColors),
        useCases: [
          'Außenbauteile',
          'Technische Prototypen',
          'Gehäuse für Elektronik',
        ],
        recommendedFor: 'Erfahrene Nutzer mit geschlossener Druckkammer',
        costRange: '€€€',
        durability: 'Sehr hoch',
        flexibility: 'Mittel',
      },
      technicalDetails: {
        density: { key: 'Dichte', value: '1.07 g/cm³' },
        meltingPoint: { key: 'Schmelzpunkt', value: '250°C' },
        tensileStrength: { key: 'Zugfestigkeit', value: '45 MPa' },
        elongationAtBreak: { key: 'Bruchdehnung', value: '6%' },
        impactResistance: { key: 'Schlagfestigkeit', value: '15 kJ/m²' },
        thermalResistance: { key: 'Wärmebeständigkeit', value: '95°C' },
        flexibility: { key: 'Flexibilität', value: '4/10' },
        thickness: { key: 'Filamentdurchmesser', value: '1.75 mm, 2.85 mm' },
        colors: { key: 'Farben', value: 'jegliche auf Anfrage' },
      },
      sustainability: {
        biodegradable: false,
        recyclable: true,
      },
      callToAction: {
        paragraph1: 'Nutze ASA für langlebige und wetterfeste Bauteile!',
        paragraph2:
          'Perfekt für den Außeneinsatz und Anwendungen mit hoher UV-Belastung.',
        paragraph3: 'Jetzt dein ASA-Filament in deiner Wunschfarbe sichern!',
      },
      contentSections: [
        {
          header: 'Anwendungsbereiche und Einsatzmöglichkeiten',
          paragraphs: [
            'ASA ist besonders für den Außeneinsatz geeignet, da es eine hohe Witterungs- und UV-Beständigkeit aufweist.',
            'Es wird häufig für technische Bauteile, Fahrzeugkomponenten und wetterfeste Gehäuse verwendet.',
            'Dank seiner mechanischen Festigkeit eignet es sich auch für funktionale Prototypen und langlebige Konstruktionen.',
          ],
          imageURL:
            'https://firebasestorage.googleapis.com/v0/b/trabbis3dprintservice.firebasestorage.app/o/website-media%2Fpexels-jakubzerdzicki-19376296.jpg?alt=media&token=bb240385-bc1b-4aee-be50-418a7a50d6b0',
        },
        {
          header: 'Technische Vorteile und Eigenschaften',
          paragraphs: [
            'ASA ist eine verbesserte Alternative zu ABS mit höherer UV-Beständigkeit und geringerer Vergilbung.',
            'Es verfügt über eine hohe mechanische Stabilität, wodurch es auch für beanspruchte Bauteile ideal ist.',
            'Durch die reduzierte Schrumpfung im Vergleich zu ABS lassen sich präzisere Druckergebnisse erzielen.',
          ],
          imageURL:
            'https://firebasestorage.googleapis.com/v0/b/trabbis3dprintservice.firebasestorage.app/o/website-media%2Fpexels-jakubzerdzicki-19376296.jpg?alt=media&token=bb240385-bc1b-4aee-be50-418a7a50d6b0',
        },
        {
          header: 'Vergleich mit ABS und anderen Materialien',
          paragraphs: [
            'ASA bietet ähnliche mechanische Eigenschaften wie ABS, jedoch mit besserer Witterungs- und UV-Beständigkeit.',
            'Im Gegensatz zu PLA ist ASA hitzebeständiger und widerstandsfähiger gegenüber äußeren Einflüssen.',
            'Für Anwendungen im Freien ist ASA eine der besten Optionen, da es seine Farbe und Stabilität langfristig beibehält.',
          ],
          imageURL:
            'https://firebasestorage.googleapis.com/v0/b/trabbis3dprintservice.firebasestorage.app/o/website-media%2Fpexels-jakubzerdzicki-19376296.jpg?alt=media&token=bb240385-bc1b-4aee-be50-418a7a50d6b0',
        },
        {
          header: 'Tipps zur Verarbeitung und Nachbearbeitung',
          paragraphs: [
            'Für den Druck mit ASA ist eine beheizte Druckplatte erforderlich, um Warping zu vermeiden.',
            'Eine geschlossene Druckkammer verbessert die Druckqualität und verhindert ungewollte Verformungen.',
            'Nachbearbeitung durch Schleifen oder chemisches Glätten mit Aceton kann die Oberflächenqualität weiter verbessern.',
          ],
          imageURL:
            'https://firebasestorage.googleapis.com/v0/b/trabbis3dprintservice.firebasestorage.app/o/website-media%2Fpexels-jakubzerdzicki-19376296.jpg?alt=media&token=bb240385-bc1b-4aee-be50-418a7a50d6b0',
        },
      ],
      costs: {
        priceEntry: [
          {
            quantity: 1,
            price: '39.99',
            calculationType: 'perRoll',
            unit: '/Rolle',
            currency: '€',
          },
        ],
      },
    },
  },
  {
    type: materialTypes.Resin,
    informations: {
      label: 'Standard Resin',
      oneLineDescription:
        'Detaillierte Druckergebnisse mit glatter Oberfläche für hochpräzise Modelle.',
      path: 'standard-resin',
      media: {
        heroImage: {
          url: 'https://firebasestorage.googleapis.com/v0/b/trabbis3dprintservice.firebasestorage.app/o/website-media%2Fpexels-jakubzerdzicki-19376296.jpg?alt=media&token=bb240385-bc1b-4aee-be50-418a7a50d6b0',
          altText: 'Standard Resin',
        },
        mainImage: {
          url: 'https://firebasestorage.googleapis.com/v0/b/trabbis3dprintservice.firebasestorage.app/o/website-media%2Fpexels-jakubzerdzicki-19376296.jpg?alt=media&token=bb240385-bc1b-4aee-be50-418a7a50d6b0',
          altText: 'Standard Resin',
        },
        mainVideo: { url: '', description: '' },
        additionalImages: [],
        additionalVideos: [],
      },
      summary: {
        descriptions: [
          'Standard Resin ist ideal für hochpräzise Modelle mit glatter Oberfläche und feinen Details.',
          'Es eignet sich besonders für Miniaturen, Prototypen und detaillierte Designs.',
          'Erfordert Nachbearbeitung durch UV-Härtung für optimale Festigkeit.',
        ],
        advantages: [
          'Sehr hohe Detailgenauigkeit',
          'Glatte Oberflächenstruktur',
          'Ideal für visuelle Modelle und Miniaturen',
        ],
        disadvantages: [
          'Spröder als FDM-Materialien',
          'Benötigt UV-Nachhärtung',
          'Nicht so temperatur- und stoßfest wie technische Resine',
        ],
        suitableProcesses: [processTypes.SLA, processTypes.DLP],
        chooseableColors: Object.values(allChooseableColors),
        useCases: ['Miniaturen', 'Modellbau', 'Detaillierte Prototypen'],
        recommendedFor: 'Design- und Modellbauprojekte mit hoher Präzision',
        costRange: '€€',
        durability: 'Mittel',
        flexibility: 'Gering',
      },
      technicalDetails: {
        density: { key: 'Dichte', value: '1.1 g/cm³' },
        meltingPoint: { key: 'Aushärtetemperatur', value: 'UV-Licht 405 nm' },
        tensileStrength: { key: 'Zugfestigkeit', value: '50 MPa' },
        elongationAtBreak: { key: 'Bruchdehnung', value: '5%' },
        impactResistance: { key: 'Schlagfestigkeit', value: '3 kJ/m²' },
        thermalResistance: { key: 'Wärmebeständigkeit', value: '55°C' },
        flexibility: { key: 'Flexibilität', value: '2/10' },
        thickness: { key: 'Schichtdicke', value: '0.025 - 0.1 mm' },
        colors: { key: 'Farben', value: 'jegliche auf Anfrage' },
      },
      sustainability: {
        biodegradable: false,
        recyclable: false,
      },
      callToAction: {
        paragraph1: 'Nutze Standard Resin für hochpräzise, glatte Modelle!',
        paragraph2:
          'Ideal für Miniaturen, Prototypen und detailreiche Designs.',
        paragraph3: 'Jetzt dein Resin in deiner Wunschfarbe sichern!',
      },
      contentSections: [
        {
          header: 'Anwendungsbereiche und Einsatzmöglichkeiten',
          paragraphs: [
            'Standard Resin eignet sich hervorragend für hochpräzise Modelle mit glatter Oberfläche.',
            'Es wird oft für Miniaturen, Prototypen und Modellbau eingesetzt, wo eine feine Detailwiedergabe erforderlich ist.',
            'Dank seiner hohen Auflösung ist es ideal für Anwendungen, bei denen visuelle Qualität und feine Strukturen im Vordergrund stehen.',
          ],
          imageURL:
            'https://firebasestorage.googleapis.com/v0/b/trabbis3dprintservice.firebasestorage.app/o/website-media%2Fpexels-jakubzerdzicki-19376296.jpg?alt=media&token=bb240385-bc1b-4aee-be50-418a7a50d6b0',
        },
        {
          header: 'Technische Vorteile und Eigenschaften',
          paragraphs: [
            'Standard Resin zeichnet sich durch eine extrem hohe Detailgenauigkeit aus, die mit FDM-Druck nicht erreichbar ist.',
            'Die glatte Oberflächenstruktur sorgt für ein professionelles Erscheinungsbild und ist ideal für ästhetische Modelle.',
            'Obwohl es spröder als technische Resine ist, bietet es eine solide Basis für Präsentationsmodelle und Designprototypen.',
          ],
          imageURL:
            'https://firebasestorage.googleapis.com/v0/b/trabbis3dprintservice.firebasestorage.app/o/website-media%2Fpexels-jakubzerdzicki-19376296.jpg?alt=media&token=bb240385-bc1b-4aee-be50-418a7a50d6b0',
        },
        {
          header: 'Vergleich mit anderen 3D-Druckmaterialien',
          paragraphs: [
            'Im Vergleich zu ABS Like Resin ist Standard Resin weniger schlagfest, dafür jedoch feiner in der Detailwiedergabe.',
            'Während FDM-Druckmaterialien robuster sind, bietet Standard Resin eine glattere Oberfläche und schärfere Kanten.',
            'Es ist nicht so flexibel oder hitzebeständig wie technische Resine, eignet sich aber hervorragend für detaillierte Visualisierungen.',
          ],
          imageURL:
            'https://firebasestorage.googleapis.com/v0/b/trabbis3dprintservice.firebasestorage.app/o/website-media%2Fpexels-jakubzerdzicki-19376296.jpg?alt=media&token=bb240385-bc1b-4aee-be50-418a7a50d6b0',
        },
        {
          header: 'Tipps zur Verarbeitung und Nachbearbeitung',
          paragraphs: [
            'Nach dem Druck sollte Standard Resin unter UV-Licht ausgehärtet werden, um maximale Stabilität zu erreichen.',
            'Eine Reinigung mit Isopropanol sorgt für eine glatte und saubere Oberfläche ohne Rückstände.',
            'Für eine noch feinere Nachbearbeitung können Modelle geschliffen oder grundiert und lackiert werden.',
          ],
          imageURL:
            'https://firebasestorage.googleapis.com/v0/b/trabbis3dprintservice.firebasestorage.app/o/website-media%2Fpexels-jakubzerdzicki-19376296.jpg?alt=media&token=bb240385-bc1b-4aee-be50-418a7a50d6b0',
        },
      ],
      costs: {
        priceEntry: [
          {
            quantity: 1,
            price: '49.99',
            calculationType: 'perRoll',
            unit: '/Rolle',
            currency: '€',
          },
        ],
      },
    },
  },
  {
    type: materialTypes.AbsLikeResin,
    informations: {
      label: 'ABS Like Resin',
      oneLineDescription:
        'Hohe Zähigkeit und verbesserte Schlagfestigkeit für funktionale Prototypen.',
      path: 'abs-like-resin',
      media: {
        heroImage: {
          url: 'https://firebasestorage.googleapis.com/v0/b/trabbis3dprintservice.firebasestorage.app/o/website-media%2Fpexels-jakubzerdzicki-19376296.jpg?alt=media&token=bb240385-bc1b-4aee-be50-418a7a50d6b0',
          altText: 'ABS Like Resin',
        },
        mainImage: {
          url: 'https://firebasestorage.googleapis.com/v0/b/trabbis3dprintservice.firebasestorage.app/o/website-media%2Fpexels-jakubzerdzicki-19376296.jpg?alt=media&token=bb240385-bc1b-4aee-be50-418a7a50d6b0',
          altText: 'ABS Like Resin',
        },
        mainVideo: { url: '', description: '' },
        additionalImages: [],
        additionalVideos: [],
      },
      summary: {
        descriptions: [
          'ABS Like Resin ist eine verbesserte Variante von Standard Resin mit erhöhter Zähigkeit.',
          'Es eignet sich besonders für funktionale Prototypen und mechanisch beanspruchte Bauteile.',
          'Die höhere Schlagfestigkeit macht es weniger spröde als Standard Resin.',
        ],
        advantages: [
          'Erhöhte Schlagfestigkeit im Vergleich zu Standard Resin',
          'Gute mechanische Eigenschaften',
          'Glatte Oberflächenstruktur mit hoher Detailgenauigkeit',
        ],
        disadvantages: [
          'Benötigt Nachhärtung für optimale Festigkeit',
          'Nicht so flexibel wie TPU oder andere Elastomere',
        ],
        suitableProcesses: [processTypes.SLA, processTypes.DLP],
        chooseableColors: Object.values(allChooseableColors),
        useCases: ['Funktionsprototypen', 'Mechanische Bauteile', 'Modellbau'],
        recommendedFor: 'Anwendungen mit höheren mechanischen Anforderungen',
        costRange: '€€€',
        durability: 'Hoch',
        flexibility: 'Mittel',
      },
      technicalDetails: {
        density: { key: 'Dichte', value: '1.15 g/cm³' },
        meltingPoint: { key: 'Aushärtetemperatur', value: 'UV-Licht 405 nm' },
        tensileStrength: { key: 'Zugfestigkeit', value: '65 MPa' },
        elongationAtBreak: { key: 'Bruchdehnung', value: '8%' },
        impactResistance: { key: 'Schlagfestigkeit', value: '5 kJ/m²' },
        thermalResistance: { key: 'Wärmebeständigkeit', value: '65°C' },
        flexibility: { key: 'Flexibilität', value: '4/10' },
        thickness: { key: 'Schichtdicke', value: '0.025 - 0.1 mm' },
        colors: { key: 'Farben', value: 'jegliche auf Anfrage' },
      },
      sustainability: {
        biodegradable: false,
        recyclable: false,
      },
      callToAction: {
        paragraph1:
          'Nutze ABS Like Resin für robuste und funktionale Bauteile!',
        paragraph2:
          'Ideal für mechanisch belastete Anwendungen mit hoher Präzision.',
        paragraph3: 'Jetzt dein ABS Like Resin in deiner Wunschfarbe sichern!',
      },
      contentSections: [
        {
          header: 'Anwendungsbereiche und Einsatzmöglichkeiten',
          paragraphs: [
            'ABS Like Resin eignet sich hervorragend für funktionale Prototypen und mechanisch beanspruchte Bauteile.',
            'Es ist die perfekte Wahl für Modelle, die hohe Stabilität und eine gute Schlagfestigkeit erfordern.',
            'Typische Anwendungen sind Funktionsprototypen, Gehäuse, Halterungen und technische Bauteile.',
          ],
          imageURL:
            'https://firebasestorage.googleapis.com/v0/b/trabbis3dprintservice.firebasestorage.app/o/website-media%2Fpexels-jakubzerdzicki-19376296.jpg?alt=media&token=bb240385-bc1b-4aee-be50-418a7a50d6b0',
        },
        {
          header: 'Technische Vorteile und Eigenschaften',
          paragraphs: [
            'ABS Like Resin überzeugt durch seine hohe mechanische Festigkeit und Schlagzähigkeit.',
            'Mit einer Zugfestigkeit von 65 MPa ist es deutlich robuster als herkömmliches Standard Resin.',
            'Seine Wärmebeständigkeit bis 65°C macht es ideal für anspruchsvolle Anwendungen, die eine gewisse Temperaturstabilität erfordern.',
          ],
          imageURL:
            'https://firebasestorage.googleapis.com/v0/b/trabbis3dprintservice.firebasestorage.app/o/website-media%2Fpexels-jakubzerdzicki-19376296.jpg?alt=media&token=bb240385-bc1b-4aee-be50-418a7a50d6b0',
        },
        {
          header: 'Vergleich mit Standard Resin und anderen Materialien',
          paragraphs: [
            'Im Vergleich zu Standard Resin bietet ABS Like Resin eine verbesserte Zähigkeit und höhere Schlagfestigkeit.',
            'Während Standard Resin oft spröde ist, hält ABS Like Resin mechanischen Belastungen besser stand.',
            'Es ist jedoch weniger flexibel als TPU-ähnliche Materialien, eignet sich aber hervorragend für feste, widerstandsfähige Bauteile.',
          ],
          imageURL:
            'https://firebasestorage.googleapis.com/v0/b/trabbis3dprintservice.firebasestorage.app/o/website-media%2Fpexels-jakubzerdzicki-19376296.jpg?alt=media&token=bb240385-bc1b-4aee-be50-418a7a50d6b0',
        },
        {
          header: 'Tipps zur Verarbeitung und Nachbearbeitung',
          paragraphs: [
            'Um die optimale Festigkeit zu erreichen, ist eine sorgfältige Nachhärtung unter UV-Licht erforderlich.',
            'Eine Reinigung mit Isopropanol sorgt für eine saubere Oberfläche und entfernt überschüssiges Resin.',
            'Für mechanische Anwendungen können nachträgliche Bearbeitungen wie Bohren oder Schleifen problemlos durchgeführt werden.',
          ],
          imageURL:
            'https://firebasestorage.googleapis.com/v0/b/trabbis3dprintservice.firebasestorage.app/o/website-media%2Fpexels-jakubzerdzicki-19376296.jpg?alt=media&token=bb240385-bc1b-4aee-be50-418a7a50d6b0',
        },
      ],
      costs: {
        priceEntry: [
          {
            quantity: 1,
            price: '49.99',
            calculationType: 'perRoll',
            unit: '/Rolle',
            currency: '€',
          },
        ],
      },
    },
  },
  {
    type: materialTypes.TpuLikeResin,
    informations: {
      label: 'TPU Like Resin',
      oneLineDescription:
        'Elastisches Resin für flexible und strapazierfähige Drucke.',
      path: 'tpu-like-resin',
      media: {
        heroImage: {
          url: 'https://firebasestorage.googleapis.com/v0/b/trabbis3dprintservice.firebasestorage.app/o/website-media%2Fpexels-jakubzerdzicki-19376296.jpg?alt=media&token=bb240385-bc1b-4aee-be50-418a7a50d6b0',
          altText: 'TPU Like Resin',
        },
        mainImage: {
          url: 'https://firebasestorage.googleapis.com/v0/b/trabbis3dprintservice.firebasestorage.app/o/website-media%2Fpexels-jakubzerdzicki-19376296.jpg?alt=media&token=bb240385-bc1b-4aee-be50-418a7a50d6b0',
          altText: 'TPU Like Resin',
        },
        mainVideo: { url: '', description: '' },
        additionalImages: [],
        additionalVideos: [],
      },
      summary: {
        descriptions: [
          'TPU Like Resin ist ein flexibles Kunstharz, das sich ideal für elastische und stoßfeste Bauteile eignet.',
          'Es vereint die Vorteile von Resindruck mit hoher Flexibilität und Dehnbarkeit.',
          'Perfekt für Anwendungen, die eine gewisse Nachgiebigkeit erfordern.',
        ],
        advantages: [
          'Hohe Elastizität und Flexibilität',
          'Widerstandsfähig gegenüber Stößen',
          'Feine Details und glatte Oberflächenstruktur',
        ],
        disadvantages: [
          'Benötigt spezielle Nachhärtung für optimale Elastizität',
          'Kann nicht so stark gedehnt werden wie FDM-TPU',
        ],
        suitableProcesses: [processTypes.SLA, processTypes.DLP],
        chooseableColors: Object.values(allChooseableColors),
        useCases: [
          'Stoßdämpfende Bauteile',
          'Elastische Komponenten',
          'Schutzgehäuse',
        ],
        recommendedFor: 'Flexibel einsetzbare Resindrucke mit hoher Präzision',
        costRange: '€€€',
        durability: 'Hoch',
        flexibility: 'Sehr hoch',
      },
      technicalDetails: {
        density: { key: 'Dichte', value: '1.05 g/cm³' },
        meltingPoint: { key: 'Aushärtetemperatur', value: 'UV-Licht 405 nm' },
        tensileStrength: { key: 'Zugfestigkeit', value: '25 MPa' },
        elongationAtBreak: { key: 'Bruchdehnung', value: '200%' },
        impactResistance: { key: 'Schlagfestigkeit', value: 'Sehr hoch' },
        thermalResistance: { key: 'Wärmebeständigkeit', value: '50°C' },
        flexibility: { key: 'Flexibilität', value: '9/10' },
        thickness: { key: 'Schichtdicke', value: '0.025 - 0.1 mm' },
        colors: { key: 'Farben', value: 'jegliche auf Anfrage' },
      },
      sustainability: {
        biodegradable: false,
        recyclable: false,
      },
      callToAction: {
        paragraph1:
          'Nutze TPU Like Resin für flexible und widerstandsfähige Drucke!',
        paragraph2: 'Perfekt für stoßfeste und elastische Anwendungen.',
        paragraph3: 'Jetzt dein TPU Like Resin in deiner Wunschfarbe sichern!',
      },
      contentSections: [
        {
          header: 'Anwendungsbereiche und Einsatzmöglichkeiten',
          paragraphs: [
            'TPU Like Resin ist ideal für zahlreiche Anwendungen, die eine Kombination aus Elastizität, Widerstandsfähigkeit und Präzision erfordern.',
            'Es eignet sich besonders für Schutzgehäuse, stoßabsorbierende Bauteile und flexible Komponenten.',
            'Typische Einsatzbereiche umfassen Gehäuse für Elektronik, weiche Griffe, elastische Dichtungen und funktionale Prototypen.',
          ],
          imageURL:
            'https://firebasestorage.googleapis.com/v0/b/trabbis3dprintservice.firebasestorage.app/o/website-media%2Fpexels-jakubzerdzicki-19376296.jpg?alt=media&token=bb240385-bc1b-4aee-be50-418a7a50d6b0',
        },
        {
          header: 'Technische Vorteile und Eigenschaften',
          paragraphs: [
            'TPU Like Resin vereint die Detailgenauigkeit des Resindrucks mit der Elastizität von TPU.',
            'Mit einer Bruchdehnung von bis zu 200 % bietet es eine hohe Flexibilität, während es gleichzeitig widerstandsfähig gegen Stöße bleibt.',
            'Die feine Oberflächenstruktur ermöglicht präzise Drucke mit glatter Haptik – ideal für funktionale Prototypen oder Endprodukte.',
          ],
          imageURL:
            'https://firebasestorage.googleapis.com/v0/b/trabbis3dprintservice.firebasestorage.app/o/website-media%2Fpexels-jakubzerdzicki-19376296.jpg?alt=media&token=bb240385-bc1b-4aee-be50-418a7a50d6b0',
        },
        {
          header: 'Vergleich mit anderen flexiblen Materialien',
          paragraphs: [
            'Im Vergleich zu FDM-gedrucktem TPU bietet TPU Like Resin eine viel höhere Oberflächenqualität und Detailgenauigkeit.',
            'Während FDM-TPU für extreme Dehnbarkeit besser geeignet ist, zeichnet sich das Resin durch bessere Formstabilität und eine feinere Textur aus.',
            'Es eignet sich besonders für Anwendungen, die präzise Maße, Elastizität und gleichzeitig eine gewisse Steifigkeit erfordern.',
          ],
          imageURL:
            'https://firebasestorage.googleapis.com/v0/b/trabbis3dprintservice.firebasestorage.app/o/website-media%2Fpexels-jakubzerdzicki-19376296.jpg?alt=media&token=bb240385-bc1b-4aee-be50-418a7a50d6b0',
        },
        {
          header: 'Tipps zur Verarbeitung und Nachbearbeitung',
          paragraphs: [
            'Um die optimale Elastizität zu erreichen, ist eine gezielte Nachhärtung erforderlich – idealerweise unter kontrollierter UV-Bestrahlung.',
            'Die Reinigung mit Isopropanol sorgt für eine glatte und saubere Oberfläche ohne klebrige Rückstände.',
            'Für eine längere Haltbarkeit sollten TPU Like Resin-Drucke keiner direkten Hitze über 50°C ausgesetzt werden, um ihre Flexibilität zu bewahren.',
          ],
          imageURL:
            'https://firebasestorage.googleapis.com/v0/b/trabbis3dprintservice.firebasestorage.app/o/website-media%2Fpexels-jakubzerdzicki-19376296.jpg?alt=media&token=bb240385-bc1b-4aee-be50-418a7a50d6b0',
        },
      ],
      costs: {
        priceEntry: [
          {
            quantity: 1,
            price: '49.99',
            calculationType: 'perRoll',
            unit: '/Rolle',
            currency: '€',
          },
        ],
      },
    },
  },
];

export const processes: Process[] = [
  {
    type: processTypes.SLA,
    informations: {
      label: 'Stereolithografie (SLA)',
      oneLineDescription:
        'Hochpräziser 3D-Druck mit glatten Oberflächen und feinen Details.',
      numberCompletedProjects: '200',
      path: processTypes.SLA.path,

      media: {
        heroImage: {
          url: 'https://example.com/sla-hero.jpg',
          altText: 'SLA-Druck in Aktion',
        },
        mainImage: {
          url: 'https://example.com/sla-main.jpg',
          altText: 'SLA-gedrucktes Modell',
        },
        mainVideo: {
          url: 'https://www.youtube.com/watch?v=exampleSLA',
          description: 'Einführung in die SLA-Drucktechnologie',
        },
        additionalImages: [
          {
            url: 'https://example.com/sla-image1.jpg',
            altText: 'Detailliertes SLA-Modell',
          },
        ],
        additionalVideos: [
          {
            url: 'https://www.youtube.com/watch?v=exampleSLA2',
            description: 'Fortgeschrittene SLA-Techniken',
          },
        ],
      },

      summary: {
        descriptions: [
          'Die Stereolithografie (SLA) ist ein präzises 3D-Druckverfahren, das flüssiges Harz mit einem UV-Laser aushärtet.',
          'SLA ermöglicht sehr feine Details und glatte Oberflächen, ideal für Prototypen und hochdetaillierte Modelle.',
          'Es eignet sich besonders für Anwendungen, die hohe Maßgenauigkeit und geringe Toleranzen erfordern.',
        ],
        advantages: [
          'Extrem hohe Detailgenauigkeit',
          'Sehr glatte Oberflächen',
          'Geeignet für komplexe Geometrien',
        ],
        disadvantages: [
          'Material ist spröder als FDM-Drucke',
          'UV-Licht kann die Haltbarkeit beeinträchtigen',
        ],
        suitableMaterials: [
          materialTypes.Resin,
          materialTypes.AbsLikeResin,
          materialTypes.TpuLikeResin,
        ],
        useCases: [
          'Design-Prototypen',
          'Feine Schmuckmodelle',
          'Medizinische Anwendungen',
        ],
        recommendedFor: 'Hochpräzise Modelle & Prototypen',
        costRange: '€€',
        precision: 'hoch',
        productionSpeed: 'mittel',
      },

      technicalDetails: {
        maximaleBaugroesse: {
          key: 'Maximale Baugr.',
          value: '228 x 128 x 245 mm',
        },
        standardVorlaufzeiten: {
          key: 'Vorlaufzeiten',
          value: '2-5 Werktage',
        },
        massGenauigkeit: {
          key: 'Maßgenauigkeit',
          value: '± 0.1 mm',
        },
        schichtStaerke: {
          key: 'Schichtstärke',
          value: '0.025 - 0.1 mm',
        },
        mindestMerkmalsgroesse: {
          key: 'Mind.-Merkmalgr.',
          value: '0.2 mm',
        },
      },

      callToAction: {
        paragraph1:
          'Erlebe die Präzision des SLA-Drucks für hochdetaillierte Modelle und Prototypen!',
        paragraph2:
          'Mit SLA kannst du feine Strukturen und glatte Oberflächen realisieren – ideal für anspruchsvolle Anwendungen!',
        paragraph3:
          'Nutze SLA für deine nächste Design- oder Ingenieursarbeit und sichere dir ein professionelles Ergebnis.',
      },

      contentSections: [
        {
          header: 'Wie funktioniert das SLA-Druckverfahren?',
          paragraphs: [
            'Beim Stereolithografie-Verfahren (SLA) wird flüssiges Harz Schicht für Schicht mit einem UV-Laser ausgehärtet.',
            'Durch den Laser entsteht ein hochdetailliertes und genaues Modell, das nach dem Druck in einem Nachhärtungsprozess stabilisiert wird.',
          ],
          imageURL: 'https://example.com/sla-process.jpg',
        },
        {
          header: 'Welche Materialien sind für SLA verfügbar?',
          paragraphs: [
            'SLA kann verschiedene Harze nutzen, darunter Standard-Resin für allgemeine Anwendungen, ABS-like Resin für robustere Drucke und TPU-like Resin für flexible Strukturen.',
          ],
          imageURL: 'https://example.com/sla-materials.jpg',
        },
        {
          header: 'Für welche Anwendungen eignet sich SLA?',
          paragraphs: [
            'SLA wird häufig für die Herstellung von detaillierten Prototypen, medizinischen Modellen und hochwertigen Schmuckstücken verwendet.',
            'Dank seiner Präzision ist es ideal für Anwendungen, bei denen feinste Details gefragt sind.',
          ],
          imageURL: 'https://example.com/sla-applications.jpg',
        },
      ],
    },
  },
  {
    type: processTypes.FDM_small_scale,
    informations: {
      label: 'Fused Deposition Modeling (FDM) für kleine Bauteile',
      oneLineDescription:
        'Kostengünstiger und zuverlässiger 3D-Druck mit einer großen Materialvielfalt.',
      numberCompletedProjects: '300',
      path: processTypes.FDM_small_scale.path,

      media: {
        heroImage: {
          url: 'https://example.com/fdm-hero.jpg',
          altText: 'FDM-Druck in Aktion',
        },
        mainImage: {
          url: 'https://example.com/fdm-main.jpg',
          altText: 'FDM-gedrucktes Modell',
        },
        mainVideo: {
          url: 'https://www.youtube.com/watch?v=exampleFDM',
          description: 'Einführung in die FDM-Drucktechnologie',
        },
        additionalImages: [
          {
            url: 'https://example.com/fdm-image1.jpg',
            altText: 'Detail eines FDM-Drucks',
          },
        ],
        additionalVideos: [
          {
            url: 'https://www.youtube.com/watch?v=exampleFDM2',
            description: 'Fortgeschrittene FDM-Techniken',
          },
        ],
      },

      summary: {
        descriptions: [
          'Das Fused Deposition Modeling (FDM) ist eines der am weitesten verbreiteten 3D-Druckverfahren.',
          'FDM nutzt eine erhitzte Düse, um geschmolzenen Kunststoff Schicht für Schicht aufzutragen.',
          'Dieses Verfahren ist kostengünstig, einfach zu bedienen und bietet eine große Materialvielfalt.',
        ],
        advantages: [
          'Günstige Anschaffungskosten',
          'Einfache Bedienung',
          'Vielfältige Materialauswahl',
        ],
        disadvantages: [
          'Begrenzte Präzision',
          'Mechanische Schwächen entlang der Schichtgrenzen',
        ],
        suitableMaterials: [
          materialTypes.ABS,
          materialTypes.PLA,
          materialTypes.PA6_CF_GF,
          materialTypes.PETG,
          materialTypes.ABS_CF_GF,
          materialTypes.TPU,
          materialTypes.ASA,
        ],
        useCases: ['Prototypenbau', 'Werkzeugfertigung', 'Technische Bauteile'],
        recommendedFor: 'Hobbyisten & Ingenieure',
        costRange: '€',
        precision: 'mittel',
        productionSpeed: 'schnell',
      },

      technicalDetails: {
        maximaleBaugroesse: {
          key: 'Maximale Baugr.',
          value: '250 x 250 x 250 mm',
        },
        standardVorlaufzeiten: {
          key: 'Vorlaufzeiten',
          value: '1-3 Werktage',
        },
        massGenauigkeit: {
          key: 'Maßgenauigkeit',
          value: '± 0.2 mm',
        },
        schichtStaerke: {
          key: 'Schichtstärke',
          value: '0.2 mm',
        },
        mindestMerkmalsgroesse: {
          key: 'Mind.-Merkmalgr.',
          value: '0.8 mm',
        },
      },

      callToAction: {
        paragraph1:
          'Starte noch heute mit dem FDM-Druck – einfach, kostengünstig und vielseitig!',
        paragraph2:
          'Mit FDM kannst du eine Vielzahl von Materialien nutzen und individuelle Bauteile fertigen.',
        paragraph3:
          'Entdecke die Möglichkeiten des 3D-Drucks mit FDM und erwecke deine Ideen zum Leben!',
      },

      contentSections: [
        {
          header: 'Wie funktioniert das FDM-Druckverfahren?',
          paragraphs: [
            'Beim FDM-Druck wird ein Kunststofffilament erhitzt und durch eine Düse extrudiert.',
            'Die Düse bewegt sich über die Druckplattform und trägt das Material schichtweise auf.',
          ],
          imageURL: 'https://example.com/fdm-process.jpg',
        },
        {
          header: 'Welche Materialien kann man mit FDM verwenden?',
          paragraphs: [
            'FDM-Drucker unterstützen viele Thermoplaste, darunter ABS, PLA, PETG und spezielle Carbon-verstärkte Filamente.',
          ],
          imageURL: 'https://example.com/fdm-materials.jpg',
        },
        {
          header: 'Für welche Anwendungen eignet sich FDM?',
          paragraphs: [
            'FDM wird für Prototypen, funktionale Bauteile und den Bildungsbereich genutzt.',
            'Es ist sowohl für Hobbyisten als auch für industrielle Anwendungen interessant.',
          ],
          imageURL: 'https://example.com/fdm-applications.jpg',
        },
      ],
    },
  },
  {
    type: processTypes.FDM_big_scale,
    informations: {
      label: 'Großformatiger FDM-Druck',
      oneLineDescription:
        'FDM-Druck für große Bauteile mit einem Volumen von bis zu 1m³ – nur auf Anfrage.',
      numberCompletedProjects: 'In Planung',
      path: processTypes.FDM_big_scale.path,

      media: {
        heroImage: {
          url: 'https://example.com/fdm-large-hero.jpg',
          altText: 'Großformatiger FDM-Druck in Aktion',
        },
        mainImage: {
          url: 'https://example.com/fdm-large-main.jpg',
          altText: 'Großer FDM-Druck',
        },
        mainVideo: {
          url: 'https://www.youtube.com/watch?v=exampleFDMlarge',
          description: 'Einführung in den großformatigen FDM-Druck',
        },
        additionalImages: [
          {
            url: 'https://example.com/fdm-large-image1.jpg',
            altText: 'Detail eines großformatigen FDM-Drucks',
          },
        ],
        additionalVideos: [
          {
            url: 'https://www.youtube.com/watch?v=exampleFDMlarge2',
            description: 'Technische Einblicke in den großformatigen FDM-Druck',
          },
        ],
      },

      summary: {
        descriptions: [
          'Geplantes FDM-Druckverfahren für großformatige Bauteile mit einer maximalen Baugröße von bis zu 1m³.',
          'Dieses Verfahren eignet sich für große Prototypen, Architekturmodelle und industrielle Anwendungen.',
          'Der Druckprozess ist nur auf Anfrage verfügbar und nicht über das reguläre Buchungssystem online buchbar.',
        ],
        advantages: [
          'Sehr große Bauteile möglich',
          'Kosteneffizient für große Prototypen',
          'Geeignet für Architekturmodelle und industrielle Anwendungen',
        ],
        disadvantages: [
          'Nur begrenzte Materialauswahl',
          'Längere Produktionszeiten',
          'Nur auf Anfrage verfügbar',
        ],
        suitableMaterials: [materialTypes.PLA, materialTypes.PETG],
        useCases: [
          'Großformatige Prototypen',
          'Architekturmodelle',
          'Industrielle Bauteile',
        ],
        recommendedFor: 'Industrielle Anwendungen & Großprojekte',
        costRange: '€€€',
        precision: 'mittel',
        productionSpeed: 'langsam',
      },

      technicalDetails: {
        maximaleBaugroesse: {
          key: 'Maximale Baugr.',
          value: 'Bis zu 1m³',
        },
        standardVorlaufzeiten: {
          key: 'Vorlaufzeiten',
          value: 'Auf Anfrage',
        },
        massGenauigkeit: {
          key: 'Maßgenauigkeit',
          value: '± 0.5 mm',
        },
        schichtStaerke: {
          key: 'Schichtstärke',
          value: '0.2 - 0.8 mm',
        },
        mindestMerkmalsgroesse: {
          key: 'Mind.-Merkmalgr.',
          value: '1.5 mm',
        },
      },

      callToAction: {
        paragraph1:
          'Interessiert an großformatigem 3D-Druck? Wir bieten FDM-Druck mit bis zu 1m³ Baugröße – nur auf Anfrage!',
        paragraph2:
          'Ideal für Architekturmodelle, industrielle Anwendungen und großformatige Prototypen.',
        paragraph3:
          'Kontaktiere uns für eine individuelle Beratung und ein maßgeschneidertes Angebot!',
      },

      contentSections: [
        {
          header: 'Wie funktioniert der großformatige FDM-Druck?',
          paragraphs: [
            'Beim großformatigen FDM-Druck wird ein beheiztes Druckbett mit einer Düse kombiniert, um sehr große Bauteile Schicht für Schicht aufzubauen.',
            'Aufgrund der Größe des Druckbereichs sind spezielle Kalibrierungs- und Stützstrukturen notwendig.',
          ],
          imageURL: 'https://example.com/fdm-large-process.jpg',
        },
        {
          header: 'Welche Materialien sind verfügbar?',
          paragraphs: [
            'Aktuell sind für den großformatigen Druck nur PLA und PETG verfügbar, da diese Materialien eine gute Balance zwischen Stabilität und Druckbarkeit bieten.',
          ],
          imageURL: 'https://example.com/fdm-large-materials.jpg',
        },
        {
          header:
            'Für welche Anwendungen eignet sich großformatiger FDM-Druck?',
          paragraphs: [
            'Dieses Verfahren eignet sich besonders für Anwendungen, bei denen große Einzelteile benötigt werden, z. B. für Architekturmodelle, industrielle Prototypen oder Spezialanfertigungen.',
            'Da der Druck nur auf Anfrage verfügbar ist, können wir maßgeschneiderte Lösungen anbieten.',
          ],
          imageURL: 'https://example.com/fdm-large-applications.jpg',
        },
      ],
    },
  },
];

export const finishingProcessTypes: FinishingProcessType[] = [
  {
    type: 'Painting',
    infomations: {
      description:
        'Applying paint to enhance the appearance and protect the surface.',
      materialsCompatible: [materialTypes.PLA, materialTypes.ABS], // Verweis auf zentrale Materialien
      purpose: 'Aesthetic enhancement',
      estimatedTime: '1-2 hours',
      costImpact: 'medium',
      images: [
        {
          url: 'https://example.com/painting.jpg',
          altText: 'Painted 3D-printed object',
        },
      ],
      videos: [
        {
          url: 'https://youtube.com/examplePainting',
          altText: 'sample-text',
        },
      ],
      color: 'Red',
    },
  },
  {
    type: 'Sanding',
    infomations: {
      description: 'Smoothing the surface by removing visible layer lines.',
      materialsCompatible: [materialTypes.PLA], // Nur PLA ist kompatibel
      purpose: 'Surface refinement and preparation for further processing',
      estimatedTime: '15-30 minutes',
      costImpact: 'low',
      images: [
        {
          url: 'https://example.com/sanding.jpg',
          altText: 'Sanded 3D-printed object',
        },
      ],
      videos: [
        { url: 'https://youtube.com/exampleSanding', altText: 'sample-text' },
      ],
    },
  },
  {
    type: 'Polishing',
    infomations: {
      description: 'Polishing to achieve a smooth and glossy surface finish.',
      materialsCompatible: [materialTypes.Resin], // Resin ist kompatibel
      purpose: 'Enhancing surface smoothness and appearance',
      estimatedTime: '20-40 minutes',
      costImpact: 'medium',
      images: [
        {
          url: 'https://example.com/polishing.jpg',
          altText: 'Polished 3D-printed object',
        },
      ],
      videos: [
        {
          url: 'https://youtube.com/examplePolishing',
          altText: 'sample-text',
        },
      ],
    },
  },
];
