import {Directive, ElementRef, HostListener, Inject, Input, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import { SettingsService } from '../../services/services.index';

@Directive({
  selector: '[styleClick]'
})
export class StyleClickDirective implements OnInit {

  @Input('data-theme') theme: any;

  constructor(@Inject(DOCUMENT) private _document, private ref: ElementRef, private settingsService: SettingsService) {
  }

  ngOnInit(): void {
      if (this.settingsService.themeSettings.theme === this.theme) {
          this.aplicarCheck();
      }
  }

  @HostListener('click') styleClick() {
    this.settingsService.guardarTheme({
        themeUrl: `assets/css/colors/${this.theme}.css`,
        theme: this.theme
    });
    this.aplicarCheck();
  }

  aplicarCheck() {
    const selector: any = this._document.getElementsByClassName('selector');
    for (let ele of selector) {
        ele.classList.remove('working');
    }
    this.ref.nativeElement.classList.add('working');
  }
}
