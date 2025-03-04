import { CompanyInformations } from '@sg-shared-librarys/models';
import { JobPositions } from '@sg-shared-librarys/models';

export const jobPositions: JobPositions = {
  Geschäftsführer: [
    {
      id: 1,
      name: 'Trabbi',
      position: 'Geschäftsführer',
      email: 'trabbi@example.com',
      phone: '+49 123 4567890',
      profilePictureURL:
        'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJvc3N8ZW58MHx8MHx8fDA%3D',
      bio: 'Unternehmensführer im 3D-Druck mit strategischem Fokus.',
      age: 42,
      motto: 'Wenn du es dir vorstellen kannst, können wir es drucken!',
      socialLinks: {
        LinkedIn: {
          url: 'https://www.linkedin.com/in/trabbi',
          icon: 'https://cdn-icons-png.flaticon.com/512/174/174857.png',
        },
      },
    },
    {
      id: 2,
      name: 'Domme',
      position: 'Geschäftsführer',
      email: 'domme@example.com',
      phone: '+49 123 4567891',
      profilePictureURL:
        'https://images.unsplash.com/photo-1639747280804-dd2d6b3d88ac?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2ZpbCUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D',
      bio: 'Optimiert Prozesse und wählt nachhaltige Materialien im 3D-Druck.',
      age: 38,
      motto: 'Effizienz ist der Schlüssel zu perfektem 3D-Druck!',
      socialLinks: {
        LinkedIn: {
          url: 'https://www.linkedin.com/in/domme',
          icon: 'https://cdn-icons-png.flaticon.com/512/174/174857.png',
        },
        GitHub: {
          url: 'https://github.com/domme3d',
          icon: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
        },
      },
    },
  ],
  Logistiker: [],
  Prokurist: [],
  Entwickler: [
    {
      id: 3,
      name: 'Anna',
      position: 'Entwicklerin',
      department: 'CAD & Prototyping',
      email: 'anna@example.com',
      profilePictureURL:
        'https://plus.unsplash.com/premium_photo-1682437826626-044d1234806d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZlbWFsZSUyMGVtcGxveWVyfGVufDB8fDB8fHww',
      bio: 'CAD-Designerin mit Fokus auf innovative Prototypenentwicklung.',
      age: 29,
      motto: 'Von der Idee zur Realität – Schicht für Schicht!',
      socialLinks: {
        LinkedIn: {
          url: 'https://www.linkedin.com/in/anna3d',
          icon: 'https://cdn-icons-png.flaticon.com/512/174/174857.png',
        },
        Dribbble: {
          url: 'https://dribbble.com/anna3d',
          icon: 'https://cdn-icons-png.flaticon.com/512/2111/2111398.png',
        },
      },
    },
    {
      id: 4,
      name: 'Max',
      position: 'Entwickler',
      department: 'Materialforschung & Slicer-Optimierung',
      email: 'max@example.com',
      profilePictureURL:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsJTIwcGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D',
      bio: 'Entwickelt neue Filamente und optimiert Druckparameter.',
      age: 35,
      motto: 'Jeder Layer zählt!',
      socialLinks: {
        LinkedIn: {
          url: 'https://www.linkedin.com/in/max3d',
          icon: 'https://cdn-icons-png.flaticon.com/512/174/174857.png',
        },
        ResearchGate: {
          url: 'https://www.researchgate.net/profile/Max-3D',
          icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968517.png',
        },
      },
    },
  ],
  Designer: [],
};

export const companyInformations: CompanyInformations = {
  companyName: 'Creative Designs and Works',
  address: 'Baldurstraße 31',
  postalCode: '44805',
  city: 'Bochum',
  country: 'Deutschland',
  phone: '+49 15724548008',
  email: 'kaytrabandt@gmail.com',
  website: 'https://creative-designs-and-works.de',
  managingDirectors: ['Kay Trabandt'],
  contactPerson: 'Kay Trabandt',
  companyHistorieCards: [
    {
      imgUrl:
        'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D',
      title: 'Der Start im Keller',
      description:
        'Trabbsi 3D Druck begann in einem kleinen Keller mit einer einzigen Druckmaschine. Die ersten Aufträge kamen aus der Veranstaltungstechnik für individuelle Halterungen und Adapter.',
      timePeriod: '2015-2017',
    },
    {
      imgUrl:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D',
      title: 'Erste Großaufträge',
      description:
        'Nach wachsenden Erfolgen wurden die ersten Großaufträge für Bühnen- und Messebau realisiert. Neue Maschinen ermöglichten höhere Produktionskapazitäten.',
      timePeriod: '2018-2020',
    },
    {
      imgUrl:
        'https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D',
      title: 'Umzug in die Werkstatt',
      description:
        'Mit steigendem Kundenstamm zog Trabbsi 3D Druck in eine eigene Werkstatt um. Professionelle Drucker und ein kleines Team sorgten für noch präzisere und schnellere Produktion.',
      timePeriod: '2021-2022',
    },
    {
      imgUrl:
        'https://plus.unsplash.com/premium_photo-1681489930334-b0d26fdb9ed8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww',
      title: 'Expansion und Innovation',
      description:
        'Das Unternehmen expandierte weiter, bot neue Materialien und Technologien an und baute Partnerschaften mit Industrieunternehmen auf.',
      timePeriod: '2023-heute',
    },
  ],
  companyValues: [
    {
      label: 'Innovation',
      description:
        'Wir setzen auf kontinuierliche Innovation und neue Technologien, um unseren Kunden die besten Lösungen zu bieten.',
      imgUrl:
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    },
    {
      label: 'Nachhaltigkeit',
      description:
        'Nachhaltige Materialien und umweltfreundliche Prozesse sind für uns essenziell, um die Zukunft verantwortungsvoll zu gestalten.',
      imgUrl:
        'https://images.unsplash.com/photo-1560807707-8cc77767d783?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    },
    {
      label: 'Qualität',
      description:
        'Höchste Qualität in der Produktion und im Service stehen bei uns an erster Stelle – für langlebige und präzise Produkte.',
      imgUrl:
        'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    },
    {
      label: 'Kundenzufriedenheit',
      description:
        'Unsere Kunden stehen im Mittelpunkt. Wir legen großen Wert auf individuelle Beratung und maßgeschneiderte Lösungen.',
      imgUrl:
        'https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    },
  ],
};
