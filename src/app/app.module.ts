import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PageModule } from './pages/page.module';
import { AppRoutingModule } from './app-routing.module';
import { ServicesModule } from './services/services.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NofoundComponent } from './nofound/nofound.component';
import { RegisterComponent } from './register/register.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NofoundComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PageModule,
    AppRoutingModule,
    ServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
