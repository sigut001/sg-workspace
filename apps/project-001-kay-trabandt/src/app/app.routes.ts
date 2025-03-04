import { Routes } from '@angular/router';
import {
  AboutUs1Component,
  NotFoundComponent,
} from '@sg-shared-librarys/ui-components';
import { ProcessTypesOverviewComponent } from './ui-elements/sites/processtypes/processtypes-overview.component';
import { navItems } from './config-files/nav-items.config';
import { NavItem, SubNavItem } from '@sg-shared-librarys/navigation';
import { MaterialsOverviewComponent } from './ui-elements/sites/materials/materials-overview.component';
import { ProcessTypeComponent } from './ui-elements/sites/processtypes/processtype.component';
import { MaterialViewComponent } from './ui-elements/sites/materials/material-view.component';
import { UnternehmenComponent } from './ui-elements/sites/unternehmen/unternehmen.component';
import { DruckanfrageComponent } from './ui-elements/sites/druckanfrage/druckanfrage.component';

export const routes: Routes = [
  { path: '', redirectTo: 'unsere-dienstleistung', pathMatch: 'full' }, // Umleitung von "/" auf "unsere-dienstleistung"

  // Dienstleidtung-Seite
  { path: 'unsere-dienstleistung', component: UnternehmenComponent },

  // Über Uns-Seite
  { path: 'ueber-uns', component: AboutUs1Component },

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
