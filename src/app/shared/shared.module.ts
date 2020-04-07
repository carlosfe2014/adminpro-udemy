import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {BreadcrumComponent} from './breadcrum/breadcrum.component';



@NgModule({
  declarations: [
      HeaderComponent,
      SidebarComponent,
      BreadcrumComponent
  ],
  exports: [
      HeaderComponent,
      SidebarComponent,
      BreadcrumComponent
  ],
  imports: [
    // CommonModule
  ]
})
export class SharedModule { }
