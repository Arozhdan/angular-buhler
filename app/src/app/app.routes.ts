import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./auth/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: '',
    loadComponent: () =>
      import('./production-line-list/production-line-list.component').then(
        (m) => m.ProductionLineListComponent
      ),
  },
  {
    path: 'production-line/:id',
    loadComponent: () =>
      import('./production-line/production-line.component').then(
        (m) => m.ProductionLineComponent
      ),
  },
];
