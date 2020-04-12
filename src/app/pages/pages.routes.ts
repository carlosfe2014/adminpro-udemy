import {Routes, RouterModule} from '@angular/router';

import {PagesComponent} from './pages.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProgressComponent} from './progress/progress.component';
import {Grafica1Component} from './grafica1/grafica1.component';
import {AccountSettingsComponent} from './account-settings/account-settings.component';
import {PromesasComponent} from './promesas/promesas.component';
import {RxjsComponent} from './rxjs/rxjs.component';


const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard', descripcion: 'Página de inicio' } },
            { path: 'progress', component: ProgressComponent, data: { titulo: 'Barras de progreso', descripcion: 'Página de barras' } },
            { path: 'grafica1', component: Grafica1Component, data: { titulo: 'Gráficas', descripcion: 'Página de gráficas' } },
            { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas', descripcion: 'Página de promesas' } },
            { path: 'rxjs', component: RxjsComponent, data: { titulo: 'Rxjs', descripcion: 'Página de rxjs' } },
            { path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Ajustes de la cuenta', descripcion: 'Página de ajustes' } },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);