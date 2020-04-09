import { Component, OnInit } from '@angular/core';
declare function initThemePlugins();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      initThemePlugins();
  }
}
