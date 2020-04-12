import { Component, OnInit } from '@angular/core';
import {ActivationEnd, Router} from '@angular/router';
import {filter, map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Meta, MetaDefinition, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrum',
  templateUrl: './breadcrum.component.html',
  styles: []
})
export class BreadcrumComponent implements OnInit {

  titulo: string;
  constructor(
      private router: Router,
      private title: Title,
      private meta: Meta
  ) {
    this.getDataRouter().subscribe((data: any) => {
      this.titulo = data.titulo;
      this.title.setTitle(data.titulo);
      let metaTag: MetaDefinition = {
        name: 'description',
        content: data.descripcion
      };
      this.meta.updateTag(metaTag);
    });
  }
  ngOnInit(): void {
  }
  getDataRouter(): Observable<any> {
    return this.router.events.pipe(
        filter((evento) => evento instanceof ActivationEnd),
        filter((evento: ActivationEnd) => evento.snapshot.firstChild === null),
        map((evento: ActivationEnd) => evento.snapshot.data)
    );
  }
}
