import { Route } from '@angular/router';
import { ROUTE_NAMES } from './shared/constants/routes.constants';

export const appRoutes: Route[] = [
  {
    path: ROUTE_NAMES.VESSELS_PAGE,
    loadComponent: () =>
      import('./pages/vessels-page/vessels-page.component').then(
        (mod) => mod.VesselsPageComponent
      ),
  },
  {
    path: ROUTE_NAMES.EMISSIONS_PAGE,
    loadComponent: () =>
      import('./pages/emissions-page/emissions-page.component').then(
        (mod) => mod.EmissionsPageComponent
      ),
  },
  {
    path: '',
    redirectTo: ROUTE_NAMES.VESSELS_PAGE,
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: ROUTE_NAMES.VESSELS_PAGE,
    pathMatch: 'full',
  },
];
