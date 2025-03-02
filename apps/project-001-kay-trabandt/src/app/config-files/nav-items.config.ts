import { NavItem, SubNavItem } from '@sg-shared-librarys/navigation';
import { materials, processes } from './production.config';

// Dynamisch generierte NavItems (wird sofort beim Import aufgerufen)
export const navItems: NavItem[] = generateDynamicNavItems();

// Funktion zum dynamischen Hinzufügen von Materialien und Prozessen zur Navigation
function generateDynamicNavItems(): NavItem[] {
  console.log(
    'Navitems für Materialien und Fertigungstypen werden hinzugefügt'
  );

  // Kopiere die bestehenden Standard-Navigationspunkte
  const dynamicNavItems: NavItem[] = [
    {
      label: 'Unsere Dienstleistung',
      path: 'unsere-dienstleistung',
      type: 'ContentPage',
      meta: {
        title: 'Unsere Dienstleistung',
        description: 'Informationen über die Dienstleistung',
      },
    },
    {
      label: 'Technische Informationen',
      path: '3d-druck-infos',
      type: 'ContentPage',
      categories: [],
      meta: {
        title: '3D-Druck',
        description:
          'Entdecken Sie unsere Materialien, Fertigungsverfahren und Nachbearbeitungsmethoden.',
      },
    },
    {
      label: 'Über uns',
      path: 'ueber-uns',
      type: 'ContentPage',
      meta: {
        title: 'Über uns',
        description: 'Informationen über das Unternehmen und das Team.',
      },
    },
    {
      label: 'Druckanfrage',
      path: 'druckanfrage',
      type: 'ActionPage',
      meta: {
        title: 'Druckanfrage',
        description: 'Fragen Sie hier Ihre 3D-Druck-Dienstleistungen an.',
      },
    },
  ];

  // Materialien zur Navigation hinzufügen
  const materialNavItem: {
    label: string;
    path: string;
    subNavItems: SubNavItem[];
  } = {
    label: 'Materialien',
    path: '3d-druck-infos/materialien',
    subNavItems: [
      {
        label: 'Übersicht',
        path: '3d-druck-infos/materialien-uebersicht',
        type: 'ContentPage' as const,
        meta: {
          title: 'Materialien Übersicht',
          description:
            'Eine Übersicht über alle Materialien, die angeboten werden',
        },
      },
      ...Object.values(materials).map((material) => ({
        label: `${material.type.name}`,
        path: `3d-druck-infos/materialien/${material.type.path}`,
        type: 'ContentPage' as const,
        meta: {
          title: `${material.type.name} Übersicht`,
          description: material.informations.oneLineDescription ?? '',
        },
      })),
    ],
  };

  // Prozesse zur Navigation hinzufügen
  const processNavItem: {
    label: string;
    path: string;
    subNavItems: SubNavItem[];
  } = {
    label: 'Fertigungsverfahren',
    path: '3d-druck-infos/fertigungsverfahren',
    subNavItems: [
      {
        label: 'Übersicht',
        path: '3d-druck-infos/fertigungsverfahren-uebersicht',
        type: 'ContentPage' as const,
        meta: {
          title: 'Fertigungsverfahren Übersicht',
          description: 'Eine Übersicht über alle Fertigungsverfahren',
        },
      },
      ...processes.map((process) => ({
        label: `${process.informations.label}`,
        path: `3d-druck-infos/fertigungsverfahren/${process.informations.path}`,
        type: 'ContentPage' as const,
        meta: {
          title: `${process.type} Übersicht`,
          description: '',
        },
      })),
    ],
  };

  // Materialien und Prozesse zur Navigation hinzufügen
  dynamicNavItems[1].categories?.push(materialNavItem);
  dynamicNavItems[1].categories?.push(processNavItem);

  return dynamicNavItems;
}
