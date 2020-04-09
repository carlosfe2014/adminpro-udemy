import { NgModule } from '@angular/core';

import { ChartsModule } from 'ng2-charts';
import {SharedModule} from '../shared/shared.module';
import {PAGES_ROUTES} from './pages.routes';

import {DashboardComponent} from './dashboard/dashboard.component';
import {ProgressComponent} from './progress/progress.component';
import {Grafica1Component} from './grafica1/grafica1.component';
import {PagesComponent} from './pages.component';
import {FormsModule} from '@angular/forms';
import {IncrementadorComponent} from '../components/incrementador/incrementador.component';
import {GraficoDonaComponent} from '../components/grafico-dona/grafico-dona.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import {StyleClickDirective} from './directives/style-click.directive';


@NgModule({
  declarations: [
      DashboardComponent,
      ProgressComponent,
      Grafica1Component,
      PagesComponent,
      IncrementadorComponent,
      GraficoDonaComponent,
      AccountSettingsComponent,
      StyleClickDirective
  ],
  imports: [
    SharedModule,
    FormsModule,
    ChartsModule,
    PAGES_ROUTES
  ]
})
export class PageModule { }
