import { Routes } from '@angular/router';
import {
  UnternehmenComponent,
  DruckanfrageComponent,
  NotFoundComponent,
  AboutUsComponent,
} from '@simons-workspace/ui-components';
import { ProcessTypesOverviewComponent } from './sides/processTypes/processTypes-overview.component';
import { navItems } from 'apps/trabbis3D/config-files/nav-items.config';
import { NavItem, SubNavItem } from '@simons-workspace/ui-components';
import { MaterialsOverviewComponent } from './sides/materials/materials-overview.component';
import { ProcessTypeComponent } from './sides/processTypes/processType.component';
import { MaterialViewComponent } from './sides/materials/material-view.component';

export const routes: Routes = [
  { path: '', redirectTo: 'unsere-dienstleistung', pathMatch: 'full' }, // Umleitung von "/" auf "unsere-dienstleistung"

  // Dienstleidtung-Seite
  { path: 'unsere-dienstleistung', component: UnternehmenComponent },

  // Über Uns-Seite
  { path: 'ueber-uns', component: AboutUsComponent },

  // Produkte-Seite mit Unterseiten
  {
    path: '3d-druck-infos/fertigungsverfahren-uebersicht',
    component: ProcessTypesOverviewComponent,
  },

  {
    path: '3d-druck-infos/materialien-uebersicht',
    component: MaterialsOverviewComponent,
  },

  // Druckanfrage-Seite
  { path: 'druckanfrage', component: DruckanfrageComponent },

  // Dynamisch generierte Routen aus navItems
  ...generateDynamicRoutes(navItems),

  // Fehlerseite (404 - Seite nicht gefunden)
  { path: '**', component: NotFoundComponent },
];

function generateDynamicRoutes(navItems: NavItem[]): Routes {
  const routes = navItems.flatMap((navItem) => {
    if (!navItem.categories) return [];

    return navItem.categories.flatMap((category) => {
      return category.subNavItems.flatMap((subNavItem) => {
        if (category.label === 'Materialien') {
          return createMaterialRoute(subNavItem);
        }

        if (category.label === 'Fertigungsverfahren') {
          return createProcesstypeRoute(subNavItem);
        }

        return [];
      });
    });
  });

  // 🔥 Ausgabe der gesamten generierten Routen
  console.log('Dynamisch generierte Routen:', routes);

  return routes;
}

// 🛠 Hilfsfunktion zum Erstellen einer Route basierend auf einem SubNavItem
function createMaterialRoute(subNavItem: SubNavItem): Routes[0] {
  return {
    path: subNavItem.path,
    component: MaterialViewComponent,
    data: {
      title: subNavItem.meta?.title || '',
      description: subNavItem.meta?.description || '',
    },
  };
}

function createProcesstypeRoute(subNavItem: SubNavItem): Routes[0] {
  return {
    path: subNavItem.path,
    component: ProcessTypeComponent,
    data: {
      title: subNavItem.meta?.title || '',
      description: subNavItem.meta?.description || '',
    },
  };
}
