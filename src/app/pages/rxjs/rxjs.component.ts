import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {filter, map, retry} from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  sub: Subscription;

  constructor() {

    this.sub = this.regresaObservable().subscribe(
      next => console.log("SUBS ", next),
      error => console.error(error)
    );

  }

  ngOnInit(): void {
  }

  regresaObservable(): Observable<any>{
    return new Observable<any>( observer => {
          let contador = 0;
          let interval = setInterval(() => {
              contador++;
              let salida = {
                valor: contador
              }
              observer.next(salida);
          }, 1000);

          return () => {
            clearInterval(interval);
            console.log('Se desuscribio el observador en:', contador);
          };
      }).pipe(
          map( respuesta => {
            return respuesta.valor;
          }),
          filter((valor, index) => {
            console.log(valor, index);
            return valor > 1;
          })
    );
  }

  ngOnDestroy(): void {
    console.log('se cierra la pagina');
    this.sub.unsubscribe();
  }

}
