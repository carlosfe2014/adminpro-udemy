import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from '@angular/common';


export interface ThemeSettings {
    themeUrl: string;
    theme: string;
}

@Injectable()
export class SettingsService {

  themeSettings: ThemeSettings = {
      themeUrl: 'assets/css/colors/default-dark.css',
      theme: 'default-dark'
  }

  constructor(
      @Inject(DOCUMENT) private _document
  ) {
    this.leerTheme();
    this.aplicarTheme();
  }
  aplicarTheme() {
      const theme = this._document.getElementById('theme');
      theme.setAttribute('href', `assets/css/colors/${this.themeSettings.theme}.css`);
  }
  guardarTheme(theme: ThemeSettings){
    this.themeSettings = theme;
    localStorage.setItem('themeSettings', JSON.stringify(this.themeSettings));
    this.aplicarTheme();
  }
  leerTheme() {
    if (localStorage.getItem('themeSettings') !== null) {
        this.themeSettings = JSON.parse(localStorage.getItem('themeSettings'));
    }
  }
}
