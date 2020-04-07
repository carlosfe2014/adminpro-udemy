import { NgModule } from '@angular/core';

import {SharedModule} from '../shared/shared.module';
import {PAGES_ROUTES} from './pages.routes';

import {DashboardComponent} from './dashboard/dashboard.component';
import {ProgressComponent} from './progress/progress.component';
import {Grafica1Component} from './grafica1/grafica1.component';
import {PagesComponent} from './pages.component';

@NgModule({
  declarations: [
      DashboardComponent,
      ProgressComponent,
      Grafica1Component,
      PagesComponent
  ],
  imports: [
    SharedModule,
    PAGES_ROUTES
  ]
})
export class PageModule { }
