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
  PLA: { name: 'PLA', path: 'pla' },
  ABS: { name: 'ABS', path: 'abs' },
  Resin: { name: 'Resin', path: 'resin' },
  Nylon: { name: 'Nylon', path: 'nylon' },
  Metall: { name: 'Metall', path: 'metall' },
  Keramik: { name: 'Keramik', path: 'keramik' },
} as const;
// Typ für Materialtypen basierend auf `materialTypes`
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
  FDM: { name: 'FDM', path: 'fdm' },
  SLA: { name: 'SLA', path: 'sla' },
  SLS: { name: 'SLS', path: 'sls' },
  DLP: { name: 'DLP', path: 'dlp' },
  MJF: { name: 'MJF', path: 'mjf' },
  EBM: { name: 'EBM', path: 'ebm' },
  SLM: { name: 'SLM', path: 'slm' },
} as const;
// Typ für Prozess-Typen basierend auf `processTypes`
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

      // Medieninhalte
      media: {
        heroImage: {
          url: 'https://m.media-amazon.com/images/I/81hLSwOc9fL.jpg',
          altText: 'PLA Filament',
        },
        mainImage: {
          url: 'https://www.kokoni3d.com/cdn/shop/files/7_7e13e153-ce19-4eb3-83c4-baed3456ed07.png?v=1713500690&width=1500',
          altText: 'PLA Filament',
        },
        mainVideo: { url: '', description: '' },
        additionalImages: [
          {
            url: 'https://images.unsplash.com/photo-1597765206558-6f4e06954f2f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8M2QlMjBkcnVja3xlbnwwfHwwfHx8MA%3D%3D',
            altText: '',
          },
          {
            url: 'https://plus.unsplash.com/premium_photo-1714859729164-5e5b6af0db28?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            altText: '',
          },
          {
            url: 'https://images.unsplash.com/photo-1611505908502-5b67e53e3a76?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8M2QlMjBkcnVja3xlbnwwfHwwfHx8MA%3D%3D',
            altText: '',
          },
          {
            url: 'https://images.unsplash.com/photo-1597765206558-6f4e06954f2f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8M2QlMjBkcnVja3xlbnwwfHwwfHx8MA%3D%3D',
            altText: '',
          },
          {
            url: 'https://images.unsplash.com/photo-1611117775350-ac3950990985?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8M2QlMjBkcnVja3xlbnwwfHwwfHx8MA%3D%3D',
            altText: '',
          },
          {
            url: 'https://plus.unsplash.com/premium_photo-1715876679877-079db51d1d6a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8M2QlMjBkcnVja3xlbnwwfHwwfHx8MA%3D%3D',
            altText: '',
          },
        ],
        additionalVideos: [],
      },

      // Zusammenfassung & Eigenschaften
      summary: {
        descriptions: [
          'PLA ist eines der am häufigsten verwendeten 3D-Druckmaterialien und überzeugt durch seine einfache Handhabung.',
          'Das Material hat eine geringe Verzugsneigung und benötigt keine beheizte Druckplatte.',
          'Es ist biologisch abbaubar und daher eine umweltfreundliche Option für viele Anwendungen.',
        ],
        advantages: [
          'Einfache Verarbeitung',
          'Geringes Warping',
          'Große Auswahl an Farben und Spezialfilamenten',
        ],
        disadvantages: [
          'Weniger temperaturbeständig als ABS oder Nylon',
          'Brüchiger als andere Filamente bei mechanischer Belastung',
        ],
        suitableProcesses: [processTypes.FDM],
        chooseableColors: [
          allChooseableColors.silver,
          allChooseableColors.gold,
        ],

        useCases: ['Prototyping', 'Modellbau', 'Spielzeugherstellung'],
        recommendedFor: 'Hobby-Drucker und Einsteiger',
        costRange: '€',
        durability: 'Mittel',
        flexibility: 'Gering',
      },

      // Technische Details
      technicalDetails: {
        density: { key: 'Dichte', value: '1.25 g/cm³' },
        meltingPoint: { key: 'Schmelzpunkt', value: '190°C' },
        tensileStrength: { key: 'Zugfestigkeit', value: '60 MPa' },
        elongationAtBreak: { key: 'Bruchdehnung', value: '6%' },
        impactResistance: { key: 'Schlagfestigkeit', value: '2.5 kJ/m²' },
        thermalResistance: { key: 'Wärmebeständigkeit', value: '60°C' },
        flexibility: { key: 'Flexibilität', value: '3/10' },
        thickness: { key: 'Filamentdurchmesser', value: '1.75 mm, 2.85 mm' },
      },

      // Nachhaltigkeit
      sustainability: {
        biodegradable: true,
        recyclable: false,
      },

      // Call to Action
      callToAction: {
        paragraph1:
          'Starte mit PLA – dem idealen Material für Einsteiger und Profis!',
        paragraph2:
          'Perfekt für detailreiche Modelle, umweltfreundlich und leicht zu drucken.',
        paragraph3:
          'Sichere dir jetzt dein PLA-Filament in deiner Wunschfarbe!',
      },

      // Abschnittsbasierte Inhalte
      contentSections: [
        {
          header: 'Einfache Verarbeitung',
          paragraphs: [
            'PLA ist ein benutzerfreundliches Material, das sich leicht drucken lässt.',
            'Es erfordert keine beheizte Druckplatte und neigt kaum zum Warping.',
          ],
          imageURL:
            'https://plus.unsplash.com/premium_photo-1714859729164-5e5b6af0db28?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          header: 'Vielseitige Farboptionen',
          paragraphs: [
            'PLA ist in einer Vielzahl von Farben erhältlich, darunter Neon- und Glow-in-the-Dark-Töne.',
            'Dies macht es ideal für kreative und dekorative Anwendungen.',
          ],
          imageURL:
            'https://images.unsplash.com/photo-1611505908502-5b67e53e3a76?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8M2QlMjBkcnVja3xlbnwwfHwwfHx8MA%3D%3D',
        },
        {
          header: 'Nachhaltige Wahl',
          paragraphs: [
            'PLA besteht aus nachwachsenden Rohstoffen und ist biologisch abbaubar.',
            'Es eignet sich besonders für umweltbewusste Projekte.',
          ],
          imageURL:
            'https://images.unsplash.com/photo-1597765206558-6f4e06954f2f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8M2QlMjBkcnVja3xlbnwwfHwwfHx8MA%3D%3D',
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
        'Robust, temperaturbeständig und ideal für funktionale Bauteile.',
      path: 'abs',

      // Medieninhalte
      media: {
        heroImage: {
          url: 'https://m.media-amazon.com/images/I/71LBRX6oOvL._AC_UF1000,1000_QL80_.jpg',
          altText: 'ABS Filament',
        },
        mainImage: {
          url: 'https://m.media-amazon.com/images/I/71LBRX6oOvL._AC_UF1000,1000_QL80_.jpg',
          altText: 'ABS Filament',
        },
        mainVideo: { url: '', description: '' },
        additionalImages: [
          {
            url: 'https://images.unsplash.com/photo-1597765206558-6f4e06954f2f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8M2QlMjBkcnVja3xlbnwwfHwwfHx8MA%3D%3D',
            altText: '',
          },
          {
            url: 'https://plus.unsplash.com/premium_photo-1714859729164-5e5b6af0db28?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            altText: '',
          },
          {
            url: 'https://images.unsplash.com/photo-1611505908502-5b67e53e3a76?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8M2QlMjBkcnVja3xlbnwwfHwwfHx8MA%3D%3D',
            altText: '',
          },
          {
            url: 'https://images.unsplash.com/photo-1597765206558-6f4e06954f2f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8M2QlMjBkcnVja3xlbnwwfHwwfHx8MA%3D%3D',
            altText: '',
          },
          {
            url: 'https://images.unsplash.com/photo-1611117775350-ac3950990985?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8M2QlMjBkcnVja3xlbnwwfHwwfHx8MA%3D%3D',
            altText: '',
          },
          {
            url: 'https://plus.unsplash.com/premium_photo-1715876679877-079db51d1d6a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8M2QlMjBkcnVja3xlbnwwfHwwfHx8MA%3D%3D',
            altText: '',
          },
        ],
        additionalVideos: [],
      },

      // Zusammenfassung & Eigenschaften
      summary: {
        descriptions: [
          'ABS ist ein langlebiges und mechanisch starkes Material, das häufig in der Industrie und für funktionale Prototypen verwendet wird.',
          'Es hat eine höhere Hitzebeständigkeit als PLA und kann mit Aceton bearbeitet werden, um glatte Oberflächen zu erzeugen.',
          'ABS benötigt jedoch eine beheizte Druckplatte, um Warping zu vermeiden, und sollte in gut belüfteten Räumen gedruckt werden.',
        ],
        advantages: [
          'Höhere Hitzebeständigkeit als PLA',
          'Robust und schlagfest',
          'Mit Aceton glättbar für eine professionelle Oberfläche',
        ],
        disadvantages: [
          'Stärkeres Warping als PLA',
          'Druck benötigt eine beheizte Druckplatte',
          'Freisetzung von Dämpfen während des Drucks',
        ],
        suitableProcesses: [processTypes.FDM],
        chooseableColors: [
          allChooseableColors.silver,
          allChooseableColors.gold,
        ],

        useCases: [
          'Funktionsprototypen',
          'Werkzeuge',
          'Gehäuse für elektronische Geräte',
        ],
        recommendedFor: 'Erfahrene Anwender und industrielle Anwendungen',
        costRange: '€€',
        durability: 'Hoch',
        flexibility: 'Mittel',
      },

      // Technische Details
      technicalDetails: {
        density: { key: 'Dichte', value: '1.04 g/cm³' },
        meltingPoint: { key: 'Schmelzpunkt', value: '220°C' },
        tensileStrength: { key: 'Zugfestigkeit', value: '40 MPa' },
        elongationAtBreak: { key: 'Bruchdehnung', value: '10%' },
        impactResistance: { key: 'Schlagfestigkeit', value: '6 kJ/m²' },
        thermalResistance: { key: 'Wärmebeständigkeit', value: '85°C' },
        flexibility: { key: 'Flexibilität', value: '4/10' },
        thickness: { key: 'Filamentdurchmesser', value: '1.75 mm, 2.85 mm' },
      },

      // Nachhaltigkeit
      sustainability: {
        biodegradable: false,
        recyclable: true,
      },

      // Call to Action
      callToAction: {
        paragraph1:
          'Steigere deine 3D-Druckprojekte mit robustem und widerstandsfähigem ABS!',
        paragraph2:
          'Ideal für funktionale Prototypen, mechanische Bauteile und technische Anwendungen.',
        paragraph3:
          'Jetzt ABS-Filament entdecken und hochwertige Drucke realisieren!',
      },

      // Abschnittsbasierte Inhalte
      contentSections: [
        {
          header: 'Hohe Widerstandsfähigkeit',
          paragraphs: [
            'ABS ist bekannt für seine Robustheit und Beständigkeit gegen Stöße.',
            'Es eignet sich besonders für funktionale Bauteile und technische Anwendungen.',
          ],
          imageURL:
            'https://images.unsplash.com/photo-1611505908502-5b67e53e3a76?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8M2QlMjBkcnVja3xlbnwwfHwwfHx8MA%3D%3D',
        },
        {
          header: 'Glatte Oberflächenbearbeitung',
          paragraphs: [
            'Mit Aceton-Dampf kann ABS eine glänzende, glatte Oberfläche erhalten.',
            'Dadurch ist es ideal für professionelle Modelle und Prototypen.',
          ],
          imageURL:
            'https://plus.unsplash.com/premium_photo-1714859729164-5e5b6af0db28?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          header: 'Hitzebeständig',
          paragraphs: [
            'ABS hält höheren Temperaturen stand als PLA und bleibt stabil.',
            'Dies macht es zur bevorzugten Wahl für mechanische Teile.',
          ],
          imageURL:
            'https://images.unsplash.com/photo-1611117775350-ac3950990985?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8M2QlMjBkcnVja3xlbnwwfHwwfHx8MA%3D%3D',
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
    type: materialTypes.Resin,
    informations: {
      label: 'Resin (Harz)',
      oneLineDescription:
        'Höchste Detailgenauigkeit und glatte Oberflächen – ideal für SLA- und DLP-Druck.',
      path: 'resin',

      // Medieninhalte
      media: {
        heroImage: {
          url: 'https://bansaltrading.com/wp-content/uploads/2022/07/fi-14.jpg',
          altText: 'Resin Flasche',
        },
        mainImage: {
          url: 'https://bansaltrading.com/wp-content/uploads/2022/07/fi-14.jpg',
          altText: 'Resin Flasche',
        },
        mainVideo: { url: '', description: '' },
        additionalImages: [
          {
            url: 'https://images.unsplash.com/photo-1597765206558-6f4e06954f2f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8M2QlMjBkcnVja3xlbnwwfHwwfHx8MA%3D%3D',
            altText: '',
          },
          {
            url: 'https://plus.unsplash.com/premium_photo-1714859729164-5e5b6af0db28?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            altText: '',
          },
          {
            url: 'https://images.unsplash.com/photo-1611505908502-5b67e53e3a76?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8M2QlMjBkcnVja3xlbnwwfHwwfHx8MA%3D%3D',
            altText: '',
          },
          {
            url: 'https://images.unsplash.com/photo-1597765206558-6f4e06954f2f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8M2QlMjBkcnVja3xlbnwwfHwwfHx8MA%3D%3D',
            altText: '',
          },
          {
            url: 'https://images.unsplash.com/photo-1611117775350-ac3950990985?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8M2QlMjBkcnVja3xlbnwwfHwwfHx8MA%3D%3D',
            altText: '',
          },
          {
            url: 'https://plus.unsplash.com/premium_photo-1715876679877-079db51d1d6a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8M2QlMjBkcnVja3xlbnwwfHwwfHx8MA%3D%3D',
            altText: '',
          },
        ],
        additionalVideos: [],
      },

      // Zusammenfassung & Eigenschaften
      summary: {
        descriptions: [
          'Resin ist ein flüssiges Photopolymer, das mit UV-Licht ausgehärtet wird und vor allem im SLA- und DLP-3D-Druck verwendet wird.',
          'Es ermöglicht hochpräzise Drucke mit feinen Details und glatten Oberflächen.',
          'Nachbearbeitung mit UV-Härtung ist notwendig, um die volle Stabilität zu erreichen.',
        ],
        advantages: [
          'Extrem hohe Detailgenauigkeit',
          'Glatte, nahezu perfekte Oberflächen',
          'Ideal für Miniaturen, Schmuck und medizinische Anwendungen',
        ],
        disadvantages: [
          'Benötigt Nachhärtung mit UV-Licht',
          'Nicht so robust wie FDM-Materialien',
          'Erfordert sorgfältige Handhabung und Schutzmaßnahmen',
        ],
        suitableProcesses: [processTypes.SLA, processTypes.DLP],
        chooseableColors: [
          allChooseableColors.silver,
          allChooseableColors.gold,
        ],

        useCases: ['Schmuckdesign', 'Zahntechnik', 'Hochdetaillierte Modelle'],
        recommendedFor: 'Präzisionsdrucke und industrielle Anwendungen',
        costRange: '€€€',
        durability: 'Mittel',
        flexibility: 'Gering',
      },

      // Technische Details
      technicalDetails: {
        density: { key: 'Dichte', value: '1.1 g/cm³' },
        meltingPoint: { key: 'Schmelzpunkt', value: 'N/A' },
        tensileStrength: { key: 'Zugfestigkeit', value: '35 MPa' },
        elongationAtBreak: { key: 'Bruchdehnung', value: '5%' },
        impactResistance: { key: 'Schlagfestigkeit', value: '3 kJ/m²' },
        thermalResistance: { key: 'Wärmebeständigkeit', value: '70°C' },
        flexibility: { key: 'Flexibilität', value: '2/10' },
        thickness: { key: 'Schichtdicke', value: '0.05 - 0.1 mm' },
      },

      // Nachhaltigkeit
      sustainability: {
        biodegradable: false,
        recyclable: false,
      },

      // Call to Action
      callToAction: {
        paragraph1:
          'Erreiche höchste Detailgenauigkeit mit hochwertigem Resin für SLA- und DLP-Druck!',
        paragraph2:
          'Ideal für komplexe Modelle, medizinische Anwendungen und Schmuckdesign.',
        paragraph3:
          'Jetzt hochwertiges Resin entdecken und professionelle 3D-Drucke erstellen!',
      },

      // Abschnittsbasierte Inhalte
      contentSections: [
        {
          header: 'Ultrafeine Details',
          paragraphs: [
            'Resin bietet eine außergewöhnliche Druckauflösung und ermöglicht hochpräzise Details.',
            'Es wird häufig für Miniaturen, Schmuck und medizinische Modelle verwendet.',
          ],
          imageURL:
            'https://plus.unsplash.com/premium_photo-1715876679877-079db51d1d6a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8M2QlMjBkcnVja3xlbnwwfHwwfHx8MA%3D%3D',
        },
        {
          header: 'Spezielle Nachbearbeitung erforderlich',
          paragraphs: [
            'Nach dem Druck muss Resin ausgehärtet werden, um maximale Festigkeit zu erreichen.',
            'UV-Licht oder Sonnenlicht werden dafür typischerweise genutzt.',
          ],
          imageURL:
            'https://images.unsplash.com/photo-1615286922420-c6b348ffbd62?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8M2QlMjBkcnVja3xlbnwwfHwwfHx8MA%3D%3D',
        },
        {
          header: 'Geeignet für SLA- und DLP-Druck',
          paragraphs: [
            'Resin ist speziell für SLA- und DLP-Drucktechnologien entwickelt.',
            'Diese Druckverfahren bieten eine überragende Detailgenauigkeit im Vergleich zu FDM.',
          ],
          imageURL:
            'https://images.unsplash.com/photo-1609862776364-897efc7dafdb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fDNkJTIwZHJ1Y2t8ZW58MHx8MHx8fDA%3D',
        },
      ],

      costs: {
        priceEntry: [
          {
            quantity: 1,
            price: '49.99',
            calculationType: 'perPiece',
            unit: '/Stück',
            currency: '€',
          },
        ],
      },
    },
  },
  {
    type: materialTypes.Nylon,
    informations: {
      label: 'Nylon (Polyamid)',
      oneLineDescription:
        'Hochbelastbar, flexibel und abriebfest – ideal für mechanische Bauteile.',
      path: 'nylon',

      // Medieninhalte
      media: {
        heroImage: {
          url: 'https://blog.prusa3d.com/wp-content/uploads/2022/06/IG-title_photo_blog-scaled.jpg',
          altText: 'Nylon Filament',
        },
        mainImage: {
          url: 'https://blog.prusa3d.com/wp-content/uploads/2022/06/IG-title_photo_blog-scaled.jpg',
          altText: 'Nylon Filament',
        },
        mainVideo: { url: '', description: '' },
        additionalImages: [
          {
            url: 'https://images.unsplash.com/photo-1597765206558-6f4e06954f2f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8M2QlMjBkcnVja3xlbnwwfHwwfHx8MA%3D%3D',
            altText: '',
          },
          {
            url: 'https://plus.unsplash.com/premium_photo-1714859729164-5e5b6af0db28?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            altText: '',
          },
          {
            url: 'https://images.unsplash.com/photo-1611505908502-5b67e53e3a76?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8M2QlMjBkcnVja3xlbnwwfHwwfHx8MA%3D%3D',
            altText: '',
          },
          {
            url: 'https://images.unsplash.com/photo-1597765206558-6f4e06954f2f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8M2QlMjBkcnVja3xlbnwwfHwwfHx8MA%3D%3D',
            altText: '',
          },
          {
            url: 'https://images.unsplash.com/photo-1611117775350-ac3950990985?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8M2QlMjBkcnVja3xlbnwwfHwwfHx8MA%3D%3D',
            altText: '',
          },
          {
            url: 'https://plus.unsplash.com/premium_photo-1715876679877-079db51d1d6a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8M2QlMjBkcnVja3xlbnwwfHwwfHx8MA%3D%3D',
            altText: '',
          },
        ],
        additionalVideos: [],
      },

      // Zusammenfassung & Eigenschaften
      summary: {
        descriptions: [
          'Nylon ist ein starkes, flexibles und abriebfestes Material, das häufig für industrielle Anwendungen eingesetzt wird.',
          'Es bietet eine hohe mechanische Belastbarkeit und eignet sich für bewegliche Teile oder Zahnräder.',
          'Aufgrund seiner hygroskopischen Eigenschaften muss es vor dem Druck trocken gelagert werden.',
        ],
        advantages: [
          'Hohe mechanische Festigkeit und Flexibilität',
          'Abrieb- und chemikalienbeständig',
          'Sehr haltbar und langlebig',
        ],
        disadvantages: [
          'Muss vor dem Druck trocken gelagert werden',
          'Neigt zu Warping und benötigt eine beheizte Druckkammer',
          'Nicht so einfach zu drucken wie PLA oder ABS',
        ],
        suitableProcesses: [processTypes.FDM, processTypes.SLS],
        chooseableColors: [
          allChooseableColors.silver,
          allChooseableColors.gold,
        ],

        useCases: [
          'Mechanische Bauteile',
          'Zahnräder',
          'Funktionale Prototypen',
        ],
        recommendedFor: 'Industrielle Anwendungen und Hochleistungsbauteile',
        costRange: '€€',
        durability: 'Sehr hoch',
        flexibility: 'Hoch',
      },

      // Technische Details
      technicalDetails: {
        density: { key: 'Dichte', value: '1.14 g/cm³' },
        meltingPoint: { key: 'Schmelzpunkt', value: '250°C' },
        tensileStrength: { key: 'Zugfestigkeit', value: '50 MPa' },
        elongationAtBreak: { key: 'Bruchdehnung', value: '20%' },
        impactResistance: { key: 'Schlagfestigkeit', value: '8 kJ/m²' },
        thermalResistance: { key: 'Wärmebeständigkeit', value: '120°C' },
        flexibility: { key: 'Flexibilität', value: '7/10' },
        thickness: { key: 'Filamentdurchmesser', value: '1.75 mm, 2.85 mm' },
      },

      // Nachhaltigkeit
      sustainability: {
        biodegradable: false,
        recyclable: true,
      },

      // Call to Action
      callToAction: {
        paragraph1:
          'Steigere deine Projekte mit extrem widerstandsfähigem Nylon-Filament!',
        paragraph2:
          'Ideal für funktionale Bauteile, die hohe mechanische Belastungen aushalten müssen.',
        paragraph3:
          'Jetzt Nylon-Filament entdecken und langlebige Bauteile drucken!',
      },

      // Abschnittsbasierte Inhalte
      contentSections: [
        {
          header: 'Hohe Flexibilität und Festigkeit',
          paragraphs: [
            'Nylon ist extrem widerstandsfähig und flexibel, ideal für mechanische Bauteile.',
            'Es bietet eine gute Mischung aus Zähigkeit und Dehnbarkeit.',
          ],
          imageURL:
            'https://plus.unsplash.com/premium_photo-1715786200844-25e7b7b8b21c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fDNkJTIwZHJ1Y2t8ZW58MHx8MHx8fDA%3D',
        },
        {
          header: 'Abrieb- und Chemikalienbeständig',
          paragraphs: [
            'Dank seiner Abriebfestigkeit eignet sich Nylon für langlebige Bauteile.',
            'Es hält auch verschiedenen Chemikalien und Ölen stand.',
          ],
          imageURL:
            'https://images.unsplash.com/photo-1597765206558-6f4e06954f2f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8M2QlMjBkcnVja3xlbnwwfHwwfHx8MA%3D%3D',
        },
        {
          header: 'Optimale Anwendung für industrielle Zwecke',
          paragraphs: [
            'Nylon wird häufig für industrielle Anwendungen wie Zahnräder oder Scharniere verwendet.',
            'Seine thermische Stabilität macht es zu einer idealen Wahl für anspruchsvolle Projekte.',
          ],
          imageURL:
            'https://images.unsplash.com/photo-1611117775350-ac3950990985?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8M2QlMjBkcnVja3xlbnwwfHwwfHx8MA%3D%3D',
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
    type: materialTypes.PLA,
    informations: {
      label: 'PLA (Polylactid)',
      oneLineDescription:
        'Einfach zu drucken, biologisch abbaubar und vielseitig einsetzbar.',
      path: 'pla',

      // Medieninhalte
      media: {
        heroImage: {
          url: 'https://m.media-amazon.com/images/I/81hLSwOc9fL.jpg',
          altText: 'PLA Filament',
        },
        mainImage: {
          url: 'https://www.kokoni3d.com/cdn/shop/files/7_7e13e153-ce19-4eb3-83c4-baed3456ed07.png?v=1713500690&width=1500',
          altText: 'PLA Filament',
        },
        mainVideo: { url: '', description: '' },
        additionalImages: [
          {
            url: 'https://images.unsplash.com/photo-1597765206558-6f4e06954f2f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8M2QlMjBkcnVja3xlbnwwfHwwfHx8MA%3D%3D',
            altText: '',
          },
          {
            url: 'https://plus.unsplash.com/premium_photo-1714859729164-5e5b6af0db28?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            altText: '',
          },
          {
            url: 'https://images.unsplash.com/photo-1611505908502-5b67e53e3a76?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8M2QlMjBkcnVja3xlbnwwfHwwfHx8MA%3D%3D',
            altText: '',
          },
          {
            url: 'https://images.unsplash.com/photo-1597765206558-6f4e06954f2f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8M2QlMjBkcnVja3xlbnwwfHwwfHx8MA%3D%3D',
            altText: '',
          },
          {
            url: 'https://images.unsplash.com/photo-1611117775350-ac3950990985?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8M2QlMjBkcnVja3xlbnwwfHwwfHx8MA%3D%3D',
            altText: '',
          },
          {
            url: 'https://plus.unsplash.com/premium_photo-1715876679877-079db51d1d6a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8M2QlMjBkcnVja3xlbnwwfHwwfHx8MA%3D%3D',
            altText: '',
          },
        ],
        additionalVideos: [],
      },

      // Zusammenfassung & Eigenschaften
      summary: {
        descriptions: [
          'PLA ist eines der am häufigsten verwendeten 3D-Druckmaterialien und überzeugt durch seine einfache Handhabung.',
          'Das Material hat eine geringe Verzugsneigung und benötigt keine beheizte Druckplatte.',
          'Es ist biologisch abbaubar und daher eine umweltfreundliche Option für viele Anwendungen.',
        ],
        advantages: [
          'Einfache Verarbeitung',
          'Geringes Warping',
          'Große Auswahl an Farben und Spezialfilamenten',
        ],
        disadvantages: [
          'Weniger temperaturbeständig als ABS oder Nylon',
          'Brüchiger als andere Filamente bei mechanischer Belastung',
        ],
        suitableProcesses: [processTypes.FDM],
        chooseableColors: [
          allChooseableColors.silver,
          allChooseableColors.gold,
        ],

        useCases: ['Prototyping', 'Modellbau', 'Spielzeugherstellung'],
        recommendedFor: 'Hobby-Drucker und Einsteiger',
        costRange: '€',
        durability: 'Mittel',
        flexibility: 'Gering',
      },

      // Technische Details
      technicalDetails: {
        density: { key: 'Dichte', value: '1.25 g/cm³' },
        meltingPoint: { key: 'Schmelzpunkt', value: '190°C' },
        tensileStrength: { key: 'Zugfestigkeit', value: '60 MPa' },
        elongationAtBreak: { key: 'Bruchdehnung', value: '6%' },
        impactResistance: { key: 'Schlagfestigkeit', value: '2.5 kJ/m²' },
        thermalResistance: { key: 'Wärmebeständigkeit', value: '60°C' },
        flexibility: { key: 'Flexibilität', value: '3/10' },
        thickness: { key: 'Filamentdurchmesser', value: '1.75 mm, 2.85 mm' },
      },

      // Nachhaltigkeit
      sustainability: {
        biodegradable: true,
        recyclable: false,
      },

      // Call to Action
      callToAction: {
        paragraph1:
          'Starte mit PLA – dem idealen Material für Einsteiger und Profis!',
        paragraph2:
          'Perfekt für detailreiche Modelle, umweltfreundlich und leicht zu drucken.',
        paragraph3:
          'Sichere dir jetzt dein PLA-Filament in deiner Wunschfarbe!',
      },

      // Abschnittsbasierte Inhalte
      contentSections: [
        {
          header: 'Einfache Verarbeitung',
          paragraphs: [
            'PLA ist ein benutzerfreundliches Material, das sich leicht drucken lässt.',
            'Es erfordert keine beheizte Druckplatte und neigt kaum zum Warping.',
          ],
          imageURL:
            'https://plus.unsplash.com/premium_photo-1714859729164-5e5b6af0db28?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          header: 'Vielseitige Farboptionen',
          paragraphs: [
            'PLA ist in einer Vielzahl von Farben erhältlich, darunter Neon- und Glow-in-the-Dark-Töne.',
            'Dies macht es ideal für kreative und dekorative Anwendungen.',
          ],
          imageURL:
            'https://images.unsplash.com/photo-1611505908502-5b67e53e3a76?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8M2QlMjBkcnVja3xlbnwwfHwwfHx8MA%3D%3D',
        },
        {
          header: 'Nachhaltige Wahl',
          paragraphs: [
            'PLA besteht aus nachwachsenden Rohstoffen und ist biologisch abbaubar.',
            'Es eignet sich besonders für umweltbewusste Projekte.',
          ],
          imageURL:
            'https://images.unsplash.com/photo-1597765206558-6f4e06954f2f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8M2QlMjBkcnVja3xlbnwwfHwwfHx8MA%3D%3D',
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
        'Robust, temperaturbeständig und ideal für funktionale Bauteile.',
      path: 'abs',

      // Medieninhalte
      media: {
        heroImage: {
          url: 'https://m.media-amazon.com/images/I/71LBRX6oOvL._AC_UF1000,1000_QL80_.jpg',
          altText: 'ABS Filament',
        },
        mainImage: {
          url: 'https://m.media-amazon.com/images/I/71LBRX6oOvL._AC_UF1000,1000_QL80_.jpg',
          altText: 'ABS Filament',
        },
        mainVideo: { url: '', description: '' },
        additionalImages: [
          {
            url: 'https://images.unsplash.com/photo-1597765206558-6f4e06954f2f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8M2QlMjBkcnVja3xlbnwwfHwwfHx8MA%3D%3D',
            altText: '',
          },
          {
            url: 'https://plus.unsplash.com/premium_photo-1714859729164-5e5b6af0db28?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            altText: '',
          },
          {
            url: 'https://images.unsplash.com/photo-1611505908502-5b67e53e3a76?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8M2QlMjBkcnVja3xlbnwwfHwwfHx8MA%3D%3D',
            altText: '',
          },
          {
            url: 'https://images.unsplash.com/photo-1597765206558-6f4e06954f2f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8M2QlMjBkcnVja3xlbnwwfHwwfHx8MA%3D%3D',
            altText: '',
          },
          {
            url: 'https://images.unsplash.com/photo-1611117775350-ac3950990985?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8M2QlMjBkcnVja3xlbnwwfHwwfHx8MA%3D%3D',
            altText: '',
          },
          {
            url: 'https://plus.unsplash.com/premium_photo-1715876679877-079db51d1d6a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8M2QlMjBkcnVja3xlbnwwfHwwfHx8MA%3D%3D',
            altText: '',
          },
        ],
        additionalVideos: [],
      },

      // Zusammenfassung & Eigenschaften
      summary: {
        descriptions: [
          'ABS ist ein langlebiges und mechanisch starkes Material, das häufig in der Industrie und für funktionale Prototypen verwendet wird.',
          'Es hat eine höhere Hitzebeständigkeit als PLA und kann mit Aceton bearbeitet werden, um glatte Oberflächen zu erzeugen.',
          'ABS benötigt jedoch eine beheizte Druckplatte, um Warping zu vermeiden, und sollte in gut belüfteten Räumen gedruckt werden.',
        ],
        advantages: [
          'Höhere Hitzebeständigkeit als PLA',
          'Robust und schlagfest',
          'Mit Aceton glättbar für eine professionelle Oberfläche',
        ],
        disadvantages: [
          'Stärkeres Warping als PLA',
          'Druck benötigt eine beheizte Druckplatte',
          'Freisetzung von Dämpfen während des Drucks',
        ],
        suitableProcesses: [processTypes.FDM],
        chooseableColors: [
          allChooseableColors.silver,
          allChooseableColors.gold,
        ],

        useCases: [
          'Funktionsprototypen',
          'Werkzeuge',
          'Gehäuse für elektronische Geräte',
        ],
        recommendedFor: 'Erfahrene Anwender und industrielle Anwendungen',
        costRange: '€€',
        durability: 'Hoch',
        flexibility: 'Mittel',
      },

      // Technische Details
      technicalDetails: {
        density: { key: 'Dichte', value: '1.04 g/cm³' },
        meltingPoint: { key: 'Schmelzpunkt', value: '220°C' },
        tensileStrength: { key: 'Zugfestigkeit', value: '40 MPa' },
        elongationAtBreak: { key: 'Bruchdehnung', value: '10%' },
        impactResistance: { key: 'Schlagfestigkeit', value: '6 kJ/m²' },
        thermalResistance: { key: 'Wärmebeständigkeit', value: '85°C' },
        flexibility: { key: 'Flexibilität', value: '4/10' },
        thickness: { key: 'Filamentdurchmesser', value: '1.75 mm, 2.85 mm' },
      },

      // Nachhaltigkeit
      sustainability: {
        biodegradable: false,
        recyclable: true,
      },

      // Call to Action
      callToAction: {
        paragraph1:
          'Steigere deine 3D-Druckprojekte mit robustem und widerstandsfähigem ABS!',
        paragraph2:
          'Ideal für funktionale Prototypen, mechanische Bauteile und technische Anwendungen.',
        paragraph3:
          'Jetzt ABS-Filament entdecken und hochwertige Drucke realisieren!',
      },

      // Abschnittsbasierte Inhalte
      contentSections: [
        {
          header: 'Hohe Widerstandsfähigkeit',
          paragraphs: [
            'ABS ist bekannt für seine Robustheit und Beständigkeit gegen Stöße.',
            'Es eignet sich besonders für funktionale Bauteile und technische Anwendungen.',
          ],
          imageURL:
            'https://images.unsplash.com/photo-1611505908502-5b67e53e3a76?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8M2QlMjBkcnVja3xlbnwwfHwwfHx8MA%3D%3D',
        },
        {
          header: 'Glatte Oberflächenbearbeitung',
          paragraphs: [
            'Mit Aceton-Dampf kann ABS eine glänzende, glatte Oberfläche erhalten.',
            'Dadurch ist es ideal für professionelle Modelle und Prototypen.',
          ],
          imageURL:
            'https://plus.unsplash.com/premium_photo-1714859729164-5e5b6af0db28?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          header: 'Hitzebeständig',
          paragraphs: [
            'ABS hält höheren Temperaturen stand als PLA und bleibt stabil.',
            'Dies macht es zur bevorzugten Wahl für mechanische Teile.',
          ],
          imageURL:
            'https://images.unsplash.com/photo-1611117775350-ac3950990985?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8M2QlMjBkcnVja3xlbnwwfHwwfHx8MA%3D%3D',
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
    type: materialTypes.Resin,
    informations: {
      label: 'Resin (Harz)',
      oneLineDescription:
        'Höchste Detailgenauigkeit und glatte Oberflächen – ideal für SLA- und DLP-Druck.',
      path: 'resin',

      // Medieninhalte
      media: {
        heroImage: {
          url: 'https://bansaltrading.com/wp-content/uploads/2022/07/fi-14.jpg',
          altText: 'Resin Flasche',
        },
        mainImage: {
          url: 'https://bansaltrading.com/wp-content/uploads/2022/07/fi-14.jpg',
          altText: 'Resin Flasche',
        },
        mainVideo: { url: '', description: '' },
        additionalImages: [
          {
            url: 'https://images.unsplash.com/photo-1597765206558-6f4e06954f2f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8M2QlMjBkcnVja3xlbnwwfHwwfHx8MA%3D%3D',
            altText: '',
          },
          {
            url: 'https://plus.unsplash.com/premium_photo-1714859729164-5e5b6af0db28?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            altText: '',
          },
          {
            url: 'https://images.unsplash.com/photo-1611505908502-5b67e53e3a76?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8M2QlMjBkcnVja3xlbnwwfHwwfHx8MA%3D%3D',
            altText: '',
          },
          {
            url: 'https://images.unsplash.com/photo-1597765206558-6f4e06954f2f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8M2QlMjBkcnVja3xlbnwwfHwwfHx8MA%3D%3D',
            altText: '',
          },
          {
            url: 'https://images.unsplash.com/photo-1611117775350-ac3950990985?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8M2QlMjBkcnVja3xlbnwwfHwwfHx8MA%3D%3D',
            altText: '',
          },
          {
            url: 'https://plus.unsplash.com/premium_photo-1715876679877-079db51d1d6a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8M2QlMjBkcnVja3xlbnwwfHwwfHx8MA%3D%3D',
            altText: '',
          },
        ],
        additionalVideos: [],
      },

      // Zusammenfassung & Eigenschaften
      summary: {
        descriptions: [
          'Resin ist ein flüssiges Photopolymer, das mit UV-Licht ausgehärtet wird und vor allem im SLA- und DLP-3D-Druck verwendet wird.',
          'Es ermöglicht hochpräzise Drucke mit feinen Details und glatten Oberflächen.',
          'Nachbearbeitung mit UV-Härtung ist notwendig, um die volle Stabilität zu erreichen.',
        ],
        advantages: [
          'Extrem hohe Detailgenauigkeit',
          'Glatte, nahezu perfekte Oberflächen',
          'Ideal für Miniaturen, Schmuck und medizinische Anwendungen',
        ],
        disadvantages: [
          'Benötigt Nachhärtung mit UV-Licht',
          'Nicht so robust wie FDM-Materialien',
          'Erfordert sorgfältige Handhabung und Schutzmaßnahmen',
        ],
        suitableProcesses: [processTypes.SLA, processTypes.DLP],
        chooseableColors: [
          allChooseableColors.silver,
          allChooseableColors.gold,
        ],

        useCases: ['Schmuckdesign', 'Zahntechnik', 'Hochdetaillierte Modelle'],
        recommendedFor: 'Präzisionsdrucke und industrielle Anwendungen',
        costRange: '€€€',
        durability: 'Mittel',
        flexibility: 'Gering',
      },

      // Technische Details
      technicalDetails: {
        density: { key: 'Dichte', value: '1.1 g/cm³' },
        meltingPoint: { key: 'Schmelzpunkt', value: 'N/A' },
        tensileStrength: { key: 'Zugfestigkeit', value: '35 MPa' },
        elongationAtBreak: { key: 'Bruchdehnung', value: '5%' },
        impactResistance: { key: 'Schlagfestigkeit', value: '3 kJ/m²' },
        thermalResistance: { key: 'Wärmebeständigkeit', value: '70°C' },
        flexibility: { key: 'Flexibilität', value: '2/10' },
        thickness: { key: 'Schichtdicke', value: '0.05 - 0.1 mm' },
      },

      // Nachhaltigkeit
      sustainability: {
        biodegradable: false,
        recyclable: false,
      },

      // Call to Action
      callToAction: {
        paragraph1:
          'Erreiche höchste Detailgenauigkeit mit hochwertigem Resin für SLA- und DLP-Druck!',
        paragraph2:
          'Ideal für komplexe Modelle, medizinische Anwendungen und Schmuckdesign.',
        paragraph3:
          'Jetzt hochwertiges Resin entdecken und professionelle 3D-Drucke erstellen!',
      },

      // Abschnittsbasierte Inhalte
      contentSections: [
        {
          header: 'Ultrafeine Details',
          paragraphs: [
            'Resin bietet eine außergewöhnliche Druckauflösung und ermöglicht hochpräzise Details.',
            'Es wird häufig für Miniaturen, Schmuck und medizinische Modelle verwendet.',
          ],
          imageURL:
            'https://plus.unsplash.com/premium_photo-1715876679877-079db51d1d6a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8M2QlMjBkcnVja3xlbnwwfHwwfHx8MA%3D%3D',
        },
        {
          header: 'Spezielle Nachbearbeitung erforderlich',
          paragraphs: [
            'Nach dem Druck muss Resin ausgehärtet werden, um maximale Festigkeit zu erreichen.',
            'UV-Licht oder Sonnenlicht werden dafür typischerweise genutzt.',
          ],
          imageURL:
            'https://images.unsplash.com/photo-1615286922420-c6b348ffbd62?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8M2QlMjBkcnVja3xlbnwwfHwwfHx8MA%3D%3D',
        },
        {
          header: 'Geeignet für SLA- und DLP-Druck',
          paragraphs: [
            'Resin ist speziell für SLA- und DLP-Drucktechnologien entwickelt.',
            'Diese Druckverfahren bieten eine überragende Detailgenauigkeit im Vergleich zu FDM.',
          ],
          imageURL:
            'https://images.unsplash.com/photo-1609862776364-897efc7dafdb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fDNkJTIwZHJ1Y2t8ZW58MHx8MHx8fDA%3D',
        },
      ],

      costs: {
        priceEntry: [
          {
            quantity: 1,
            price: '49.99',
            calculationType: 'perPiece',
            unit: '/Stück',
            currency: '€',
          },
        ],
      },
    },
  },
  {
    type: materialTypes.Nylon,
    informations: {
      label: 'Nylon (Polyamid)',
      oneLineDescription:
        'Hochbelastbar, flexibel und abriebfest – ideal für mechanische Bauteile.',
      path: 'nylon',

      // Medieninhalte
      media: {
        heroImage: {
          url: 'https://blog.prusa3d.com/wp-content/uploads/2022/06/IG-title_photo_blog-scaled.jpg',
          altText: 'Nylon Filament',
        },
        mainImage: {
          url: 'https://blog.prusa3d.com/wp-content/uploads/2022/06/IG-title_photo_blog-scaled.jpg',
          altText: 'Nylon Filament',
        },
        mainVideo: { url: '', description: '' },
        additionalImages: [
          {
            url: 'https://images.unsplash.com/photo-1597765206558-6f4e06954f2f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8M2QlMjBkcnVja3xlbnwwfHwwfHx8MA%3D%3D',
            altText: '',
          },
          {
            url: 'https://plus.unsplash.com/premium_photo-1714859729164-5e5b6af0db28?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            altText: '',
          },
          {
            url: 'https://images.unsplash.com/photo-1611505908502-5b67e53e3a76?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8M2QlMjBkcnVja3xlbnwwfHwwfHx8MA%3D%3D',
            altText: '',
          },
          {
            url: 'https://images.unsplash.com/photo-1597765206558-6f4e06954f2f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8M2QlMjBkcnVja3xlbnwwfHwwfHx8MA%3D%3D',
            altText: '',
          },
          {
            url: 'https://images.unsplash.com/photo-1611117775350-ac3950990985?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8M2QlMjBkcnVja3xlbnwwfHwwfHx8MA%3D%3D',
            altText: '',
          },
          {
            url: 'https://plus.unsplash.com/premium_photo-1715876679877-079db51d1d6a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8M2QlMjBkcnVja3xlbnwwfHwwfHx8MA%3D%3D',
            altText: '',
          },
        ],
        additionalVideos: [],
      },

      // Zusammenfassung & Eigenschaften
      summary: {
        descriptions: [
          'Nylon ist ein starkes, flexibles und abriebfestes Material, das häufig für industrielle Anwendungen eingesetzt wird.',
          'Es bietet eine hohe mechanische Belastbarkeit und eignet sich für bewegliche Teile oder Zahnräder.',
          'Aufgrund seiner hygroskopischen Eigenschaften muss es vor dem Druck trocken gelagert werden.',
        ],
        advantages: [
          'Hohe mechanische Festigkeit und Flexibilität',
          'Abrieb- und chemikalienbeständig',
          'Sehr haltbar und langlebig',
        ],
        disadvantages: [
          'Muss vor dem Druck trocken gelagert werden',
          'Neigt zu Warping und benötigt eine beheizte Druckkammer',
          'Nicht so einfach zu drucken wie PLA oder ABS',
        ],
        suitableProcesses: [processTypes.FDM, processTypes.SLS],
        chooseableColors: [
          allChooseableColors.silver,
          allChooseableColors.gold,
        ],

        useCases: [
          'Mechanische Bauteile',
          'Zahnräder',
          'Funktionale Prototypen',
        ],
        recommendedFor: 'Industrielle Anwendungen und Hochleistungsbauteile',
        costRange: '€€',
        durability: 'Sehr hoch',
        flexibility: 'Hoch',
      },

      // Technische Details
      technicalDetails: {
        density: { key: 'Dichte', value: '1.14 g/cm³' },
        meltingPoint: { key: 'Schmelzpunkt', value: '250°C' },
        tensileStrength: { key: 'Zugfestigkeit', value: '50 MPa' },
        elongationAtBreak: { key: 'Bruchdehnung', value: '20%' },
        impactResistance: { key: 'Schlagfestigkeit', value: '8 kJ/m²' },
        thermalResistance: { key: 'Wärmebeständigkeit', value: '120°C' },
        flexibility: { key: 'Flexibilität', value: '7/10' },
        thickness: { key: 'Filamentdurchmesser', value: '1.75 mm, 2.85 mm' },
      },

      // Nachhaltigkeit
      sustainability: {
        biodegradable: false,
        recyclable: true,
      },

      // Call to Action
      callToAction: {
        paragraph1:
          'Steigere deine Projekte mit extrem widerstandsfähigem Nylon-Filament!',
        paragraph2:
          'Ideal für funktionale Bauteile, die hohe mechanische Belastungen aushalten müssen.',
        paragraph3:
          'Jetzt Nylon-Filament entdecken und langlebige Bauteile drucken!',
      },

      // Abschnittsbasierte Inhalte
      contentSections: [
        {
          header: 'Hohe Flexibilität und Festigkeit',
          paragraphs: [
            'Nylon ist extrem widerstandsfähig und flexibel, ideal für mechanische Bauteile.',
            'Es bietet eine gute Mischung aus Zähigkeit und Dehnbarkeit.',
          ],
          imageURL:
            'https://plus.unsplash.com/premium_photo-1715786200844-25e7b7b8b21c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fDNkJTIwZHJ1Y2t8ZW58MHx8MHx8fDA%3D',
        },
        {
          header: 'Abrieb- und Chemikalienbeständig',
          paragraphs: [
            'Dank seiner Abriebfestigkeit eignet sich Nylon für langlebige Bauteile.',
            'Es hält auch verschiedenen Chemikalien und Ölen stand.',
          ],
          imageURL:
            'https://images.unsplash.com/photo-1597765206558-6f4e06954f2f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8M2QlMjBkcnVja3xlbnwwfHwwfHx8MA%3D%3D',
        },
        {
          header: 'Optimale Anwendung für industrielle Zwecke',
          paragraphs: [
            'Nylon wird häufig für industrielle Anwendungen wie Zahnräder oder Scharniere verwendet.',
            'Seine thermische Stabilität macht es zu einer idealen Wahl für anspruchsvolle Projekte.',
          ],
          imageURL:
            'https://images.unsplash.com/photo-1611117775350-ac3950990985?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8M2QlMjBkcnVja3xlbnwwfHwwfHx8MA%3D%3D',
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
];

export const processes: Process[] = [
  {
    type: processTypes.FDM,
    informations: {
      label: 'Fused Deposition Modeling (FDM)',
      oneLineDescription:
        'Dein perfekter Einstieg in den 3D-Druck – kostengünstig, zuverlässig und einfach zu bedienen!',
      numberCompletedProjects: '100',
      path: 'fdm',

      // Gruppierung: Medien
      media: {
        heroImage: {
          url: 'https://biocraftlab.com/cdn/shop/articles/Wie_funktioniert_FDM_3D_Druck_1000x.jpg?v=1719421047',
          altText: 'FDM-Druck in Aktion',
        },
        mainImage: {
          url: 'https://faigle3d.ch/wp-content/uploads/2022/05/FDM-scaled.jpg',
          altText: 'FDM-Druck in Aktion',
        },
        mainVideo: {
          url: 'https://www.youtube.com/watch?v=exampleFDM',
          description:
            'Erklärung des FDM-Druckverfahrens und seiner Anwendungen',
        },
        additionalImages: [
          {
            url: 'https://faigle3d.ch/wp-content/uploads/2022/05/FDM-scaled.jpg',
            altText: 'FDM-Druck in Aktion',
          },
          {
            url: 'https://cdn.thingiverse.com/assets/89/51/bc/21/58/large_display_V%C3%BDst%C5%99i%C5%BEek.PNG',
            altText: 'Einführung in den FDM-Druck',
          },
          {
            url: 'https://cdn.thingiverse.com/assets/76/b8/bf/1c/5d/large_display_1.jpg',
            altText: 'Einführung in den FDM-Druck',
          },

          {
            url: 'https://cdn.thingiverse.com/assets/27/79/19/38/4e/large_display_Extra-Size-Cat-1-1.jpg',
            altText: '',
          },

          {
            url: 'https://cdn.thingiverse.com/assets/12/d4/da/0f/fa/large_display_dinosaurs.jpg',
            altText: '',
          },
          {
            url: 'https://cdn.thingiverse.com/assets/bf/e5/aa/99/28/large_display_20250102_151511.jpg',
            altText: '',
          },
        ],
        additionalVideos: [
          {
            url: 'https://www.youtube.com/watch?v=exampleFDM',
            description: 'Einführung in den FDM-Druck',
          },
        ],
      },

      // Gruppierung: Zusammenfassung & Eigenschaften
      summary: {
        descriptions: [
          `Das Fused Deposition Modeling (FDM) ist eines der am weitesten verbreiteten 3D-Druckverfahren. 
          Es arbeitet mit Thermoplasten, die erhitzt und durch eine Düse extrudiert werden. Diese Düse bewegt sich präzise entlang einer definierten Bahn, 
          um jede Schicht eines Modells zu formen. Nach dem Abkühlen verfestigt sich der Kunststoff und bildet eine stabile Struktur.`,

          `FDM ist besonders beliebt aufgrund seiner Zugänglichkeit und Vielseitigkeit. Es kann eine breite Palette von Materialien verwenden, darunter PLA, ABS, PETG und viele andere. 
          Das Verfahren ist auch deshalb so weit verbreitet, weil es eine kostengünstige Lösung für die Prototypenentwicklung darstellt.`,

          `Ein weiterer Vorteil von FDM ist die Möglichkeit, Modelle mit einer großen Bandbreite an Farben und Oberflächen zu erstellen. 
          Fortschrittliche Drucker unterstützen sogar die Verwendung mehrerer Materialien in einem einzigen Druckvorgang.`,
        ],
        advantages: [
          'Günstige Anschaffungskosten',
          'Einfache Bedienung',
          'Vielseitige Materialauswahl',
        ],
        disadvantages: [
          'Begrenzte Präzision',
          'Mechanische Schwächen entlang der Schichtgrenzen',
        ],
        suitableMaterials: [materialTypes.PLA, materialTypes.ABS],
        useCases: ['Prototypenbau', 'Werkzeugfertigung', 'Bildungsprojekte'],
        recommendedFor: 'Hobbyisten & Prototypenbauer',
        costRange: '€',
        precision: 'mittel',
        productionSpeed: 'mittel',
      },

      // Gruppierung: Technische Details
      technicalDetails: {
        maximaleBaugroesse: {
          key: 'Maximale Baugr.',
          value: '300 x 300 x 400 mm',
        },
        standardVorlaufzeiten: {
          key: 'Vorlaufzeiten',
          value: '1-3 Werktage',
        },
        massGenauigkeit: {
          key: 'Maßgenauigkeit',
          value: '± 0.2 mm oder ± 0.5 %',
        },
        schichtStaerke: { key: 'Schichtstärke', value: '0.1 - 0.4 mm' },
        mindestMerkmalsgroesse: {
          key: 'Mind.-Merkmalgr.',
          value: '0.8 mm',
        },
      },
      // Gruppierung: Call to Action
      callToAction: {
        paragraph1:
          'Starte noch heute mit dem FDM-Druck – einfach, kostengünstig und ideal für Einsteiger und Profis!',
        paragraph2:
          'Mit FDM kannst du eine Vielzahl von Materialien nutzen und deine eigenen Prototypen oder funktionale Bauteile erstellen.',
        paragraph3:
          'Sichere dir jetzt dein eigenes FDM-Drucksystem und erlebe die Zukunft des 3D-Drucks hautnah!',
      },

      // Gruppierung: Abschnittsbasierte Inhalte
      contentSections: [
        {
          header: 'Wie funktioniert das FDM-Druckverfahren?',
          paragraphs: [
            `Beim Fused Deposition Modeling (FDM) wird ein Kunststofffilament erhitzt und durch eine feine Düse extrudiert. 
            Die Düse bewegt sich über die Druckplattform und trägt das Material schichtweise auf, um das Modell zu formen.`,

            `Sobald eine Schicht abgekühlt ist, wird die nächste Schicht darüber aufgetragen. 
            Dieser Prozess wiederholt sich, bis das vollständige Objekt erstellt wurde. 
            Da FDM auf Schmelzschichtung basiert, können die einzelnen Layer in der Oberfläche sichtbar sein.`,
          ],
          imageURL:
            'https://faigle3d.ch/wp-content/uploads/2022/05/FDM-scaled.jpg',
        },
        {
          header: 'Welche Materialien kann man mit FDM verwenden?',
          paragraphs: [
            `FDM-Drucker sind sehr vielseitig und unterstützen verschiedene Arten von Thermoplasten. 
            Die gängigsten Materialien sind PLA, ABS und PETG, die sich durch unterschiedliche Eigenschaften auszeichnen.`,

            `PLA ist biologisch abbaubar und einfach zu drucken, während ABS hitzebeständiger und mechanisch stabiler ist. 
            PETG kombiniert die Vorteile beider Materialien und bietet eine hohe Schlagfestigkeit. 
            Es gibt auch Spezialmaterialien wie flexible Filamente oder kohlefaserverstärktes Filament für industrielle Anwendungen.`,
          ],
          imageURL:
            'https://faigle3d.ch/wp-content/uploads/2022/05/FDM-scaled.jpg',
        },
        {
          header: 'Für welche Anwendungen eignet sich FDM besonders?',
          paragraphs: [
            `FDM wird häufig für Prototypenbau, funktionale Bauteile und die Fertigung von Gehäusen genutzt. 
            Dank der einfachen Handhabung und der niedrigen Kosten ist es sowohl für Hobbyisten als auch für professionelle Anwendungen interessant.`,

            `Bildungseinrichtungen setzen FDM ein, um Schülern und Studenten praktische Erfahrungen im 3D-Druck zu ermöglichen. 
            Auch Unternehmen verwenden FDM für Rapid Prototyping, um Designs kostengünstig zu testen, bevor sie in die Massenproduktion gehen.`,
          ],
          imageURL:
            'https://faigle3d.ch/wp-content/uploads/2022/05/FDM-scaled.jpg',
        },
      ],
    },
  },
  {
    type: processTypes.SLA,
    informations: {
      label: 'Stereolithografie (SLA)',
      oneLineDescription:
        'Perfekte Oberflächen und höchste Präzision – ideal für Schmuck, Zahnmedizin und Prototypen!',
      numberCompletedProjects: '100',

      path: 'sla',

      media: {
        heroImage: {
          url: 'https://biocraftlab.com/cdn/shop/articles/Wie_funktioniert_FDM_3D_Druck_1000x.jpg?v=1719421047',
          altText: 'FDM-Druck in Aktion',
        },
        mainImage: {
          url: 'https://www.rapidobject.com/static/50b0f1bb44b55729aaa59ab253a02b49/b49cb/rapidobject-entstehung-3d-druck-bauteil-im-sla-verfahren.webp',
          altText: 'SLA-3D-Druck in Aktion',
        },
        mainVideo: {
          url: 'https://www.youtube.com/watch?v=exampleSLA',
          description: 'Detaillierte Einführung in das SLA-3D-Druckverfahren',
        },
        additionalImages: [
          {
            url: 'https://faigle3d.ch/wp-content/uploads/2022/05/FDM-scaled.jpg',
            altText: 'FDM-Druck in Aktion',
          },
          {
            url: 'https://cdn.thingiverse.com/assets/89/51/bc/21/58/large_display_V%C3%BDst%C5%99i%C5%BEek.PNG',
            altText: 'Einführung in den FDM-Druck',
          },
          {
            url: 'https://cdn.thingiverse.com/assets/76/b8/bf/1c/5d/large_display_1.jpg',
            altText: 'Einführung in den FDM-Druck',
          },

          {
            url: 'https://cdn.thingiverse.com/assets/27/79/19/38/4e/large_display_Extra-Size-Cat-1-1.jpg',
            altText: '',
          },

          {
            url: 'https://cdn.thingiverse.com/assets/12/d4/da/0f/fa/large_display_dinosaurs.jpg',
            altText: '',
          },
          {
            url: 'https://cdn.thingiverse.com/assets/bf/e5/aa/99/28/large_display_20250102_151511.jpg',
            altText: '',
          },
        ],
        additionalVideos: [
          {
            url: 'https://www.youtube.com/watch?v=exampleSLA',
            description: 'Funktionsweise des SLA-Drucks',
          },
        ],
      },

      summary: {
        descriptions: [
          'Die Stereolithografie (SLA) ist eines der präzisesten 3D-Druckverfahren, das flüssiges Harz mit Hilfe eines UV-Lasers schichtweise aushärtet.',
          'SLA wird häufig in Branchen eingesetzt, in denen Präzision und Oberflächenqualität entscheidend sind, z. B. Schmuckherstellung, Zahnmedizin und Modellbau.',
          'Die erzeugten Teile weisen eine hohe Maßhaltigkeit auf und eignen sich für maßgeschneiderte Prototypen oder Endverbrauchsteile.',
        ],
        advantages: [
          'Ultrahohe Präzision',
          'Sehr glatte Oberflächen',
          'Ideal für feinste Details',
        ],
        disadvantages: ['Höhere Materialkosten', 'Nachbearbeitung notwendig'],
        suitableMaterials: [materialTypes.Resin],
        useCases: ['Zahntechnik', 'Schmuckdesign', 'Hochdetaillierte Modelle'],
        recommendedFor: 'Professionelle Anwendungen',
        costRange: '€€€',
        precision: 'hoch',
        productionSpeed: 'langsam',
      },

      technicalDetails: {
        maximaleBaugroesse: {
          key: 'Maximale Baugr.',
          value: '145 x 145 x 175 mm',
        },
        standardVorlaufzeiten: {
          key: 'Vorlaufzeiten',
          value: '2-5 Werktage',
        },
        massGenauigkeit: { key: 'Maßgenauigkeit', value: '± 0.1 mm' },
        schichtStaerke: { key: 'Schichtstärke', value: '0.025 - 0.1 mm' },
        mindestMerkmalsgroesse: {
          key: 'Mind.-Merkmalgr.',
          value: '0.2 mm',
        },
      },
      callToAction: {
        paragraph1:
          'Entdecke die Welt der hochpräzisen 3D-Drucktechnologie mit SLA – perfekt für detailreiche Modelle!',
        paragraph2:
          'SLA-Druck bietet dir glatte Oberflächen und höchste Maßhaltigkeit für professionelle Anwendungen.',
        paragraph3:
          'Jetzt mehr erfahren und in die nächste Stufe der additiven Fertigung eintauchen!',
      },

      contentSections: [
        {
          header: 'Wie funktioniert das SLA-Druckverfahren?',
          paragraphs: [
            'Bei der Stereolithografie (SLA) wird ein UV-Laser verwendet, um flüssiges Harz gezielt auszuhärten.',
            'Nach jeder ausgehärteten Schicht wird die Bauplattform abgesenkt, sodass eine neue Harzschicht über das Modell fließt.',
          ],
          imageURL:
            'https://www.rapidobject.com/static/50b0f1bb44b55729aaa59ab253a02b49/b49cb/rapidobject-entstehung-3d-druck-bauteil-im-sla-verfahren.webp',
        },
      ],
    },
  },
  {
    type: processTypes.SLS,
    informations: {
      label: 'Selektives Lasersintern (SLS)',
      oneLineDescription:
        'Drucke robuste, komplexe Bauteile ohne Stützstrukturen – Perfekt für Industrie & Luftfahrt!',
      numberCompletedProjects: '100',

      path: 'sls',

      media: {
        heroImage: {
          url: 'https://biocraftlab.com/cdn/shop/articles/Wie_funktioniert_FDM_3D_Druck_1000x.jpg?v=1719421047',
          altText: 'FDM-Druck in Aktion',
        },
        mainImage: {
          url: 'https://www.3ds.com/assets/invest/styles/banner/public/2022-01/powder-bed-fusion-3.jpg.webp?itok=ud2Ma3kz',
          altText: 'SLS-Druckprozess mit Lasersintern-Technologie',
        },
        mainVideo: {
          url: 'https://www.youtube.com/watch?v=exampleSLS',
          description: 'Wie funktioniert selektives Lasersintern (SLS)?',
        },
        additionalImages: [
          {
            url: 'https://faigle3d.ch/wp-content/uploads/2022/05/FDM-scaled.jpg',
            altText: 'FDM-Druck in Aktion',
          },
          {
            url: 'https://cdn.thingiverse.com/assets/89/51/bc/21/58/large_display_V%C3%BDst%C5%99i%C5%BEek.PNG',
            altText: 'Einführung in den FDM-Druck',
          },
          {
            url: 'https://cdn.thingiverse.com/assets/76/b8/bf/1c/5d/large_display_1.jpg',
            altText: 'Einführung in den FDM-Druck',
          },

          {
            url: 'https://cdn.thingiverse.com/assets/27/79/19/38/4e/large_display_Extra-Size-Cat-1-1.jpg',
            altText: '',
          },

          {
            url: 'https://cdn.thingiverse.com/assets/12/d4/da/0f/fa/large_display_dinosaurs.jpg',
            altText: '',
          },
          {
            url: 'https://cdn.thingiverse.com/assets/bf/e5/aa/99/28/large_display_20250102_151511.jpg',
            altText: '',
          },
        ],
        additionalVideos: [
          {
            url: 'https://www.youtube.com/watch?v=exampleSLS',
            description: 'SLS-3D-Druck im Detail erklärt',
          },
        ],
      },

      summary: {
        descriptions: [
          'Das selektive Lasersintern (SLS) nutzt einen Hochleistungslaser, um pulverförmige Materialien zu verschmelzen.',
          'Da das umgebende Pulver als Stützstruktur fungiert, können komplexe Geometrien ohne zusätzliche Stützen realisiert werden.',
          'SLS wird vor allem in der Luftfahrt, Automobilindustrie und Medizintechnik für belastbare Bauteile verwendet.',
        ],
        advantages: [
          'Keine Stützstrukturen erforderlich',
          'Hohe mechanische Belastbarkeit',
          'Komplexe Geometrien möglich',
        ],
        disadvantages: [
          'Hohe Anschaffungskosten',
          'Nachbearbeitung von Pulver erforderlich',
        ],
        suitableMaterials: [materialTypes.Nylon],
        useCases: ['Luftfahrt', 'Medizintechnik', 'Funktionale Prototypen'],
        recommendedFor: 'Industrielle Fertigung',
        costRange: '€€',
        precision: 'hoch',
        productionSpeed: 'mittel',
      },

      technicalDetails: {
        maximaleBaugroesse: {
          key: 'Maximale Baugr.',
          value: '340 x 340 x 600 mm',
        },
        standardVorlaufzeiten: {
          key: 'Vorlaufzeiten',
          value: '3-7 Werktage',
        },
        massGenauigkeit: { key: 'Maßgenauigkeit', value: '± 0.3 mm' },
        schichtStaerke: { key: 'Schichtstärke', value: '0.08 - 0.15 mm' },
        mindestMerkmalsgroesse: {
          key: 'Mind.-Merkmalgr.',
          value: '0.6 mm',
        },
      },
      callToAction: {
        paragraph1:
          'Revolutioniere deine Fertigung mit SLS – dem Industriestandard für langlebige und komplexe Bauteile!',
        paragraph2:
          'Dank der stützfreien Drucktechnologie kannst du selbst komplizierte Geometrien problemlos realisieren.',
        paragraph3:
          'Jetzt informieren und das volle Potenzial des selektiven Lasersinterns entdecken!',
      },

      contentSections: [
        {
          header: 'Wie funktioniert das SLS-Druckverfahren?',
          paragraphs: [
            'Beim Selektiven Lasersintern (SLS) wird ein Hochleistungslaser genutzt, um ein pulverförmiges Material gezielt zu verschmelzen.',
            'Das Material liegt als feine Pulverschicht auf einer Bauplattform, und der Laser fährt die vorher definierte Geometrie ab, wodurch das Material an den gewünschten Stellen verschmilzt.',
          ],
          imageURL:
            'https://www.3ds.com/assets/invest/styles/banner/public/2022-01/powder-bed-fusion-3.jpg.webp?itok=ud2Ma3kz',
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
