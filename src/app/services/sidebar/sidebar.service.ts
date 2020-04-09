import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {


  menu: any = [
      {
        titulo: 'Dashboard',
          icono: 'mdi mdi-gauge',
          submenu: [
              { titulo: 'Dashboard', url: '/dashboard'},
              { titulo: 'Progress', url: '/progress'},
              { titulo: 'Grafica1', url: '/grafica1'}
          ]
      }
  ];

  constructor() { }
}
