import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {PageModule} from './pages/page.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NofoundComponent } from './nofound/nofound.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NofoundComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    PageModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
