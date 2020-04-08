import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

    @ViewChild('progressInput') progressInput: ElementRef;
    @Input('valorInicial') porcentaje: number = 50;
    @Input('titulo') leyenda: string = 'leyenda';
    @Output('cambiaValor') valorProgreso: EventEmitter<number>;


  constructor() {
    this.valorProgreso = new EventEmitter<number>();
  }

  ngOnInit(): void {


  }

    porcentajeChange(numero: number) {
        if (numero >= 100) {
            this.porcentaje = 100;
        } else if (numero <= 0) {
            this.porcentaje = 0;
        } else {
            this.porcentaje = numero;
        }
        this.valorProgreso.emit(this.porcentaje);
        this.progressInput.nativeElement.value = this.porcentaje;
    }
  cambiarValor(valor: number) {
      const nuevoValor = this.porcentaje + valor;
      if (nuevoValor >= 100) {
          this.porcentaje = 100;
      } else if (nuevoValor <= 0) {
          this.porcentaje = 0;
      } else {
          this.porcentaje = nuevoValor;
      }
      this.progressInput.nativeElement.focus();
      this.valorProgreso.emit(this.porcentaje);
  }

}
