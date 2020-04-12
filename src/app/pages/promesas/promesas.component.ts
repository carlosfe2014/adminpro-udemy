import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {
    this.contarInvertal().then((number: number) => {
      console.log("La promesa recibió: ", number);
    }, (error) => {
        console.error("Error en la promersa", error);
    }).catch((error) => {
        console.error("Error en la promersa 2", error);
    });
  }

  ngOnInit(): void {
  }

  contarInvertal(): Promise<number>{
    return new Promise<number>((resolve, reject) => {
        let contador = 0;
        let intervalo = setInterval(() => {
            contador++;
            console.log(contador);
            if (contador === 5) {
                resolve(111);
                clearInterval(intervalo);
                //reject("xxx");
            }
        }, 1000);
    });
  }

}
