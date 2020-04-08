import {Component, Input, OnInit} from '@angular/core';
import {Label, MultiDataSet} from 'ng2-charts';
import {ChartType} from 'chart.js';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

    @Input() titulo: string;
    @Input() labels: Label[];
    @Input() data: MultiDataSet;
    @Input() tipo: ChartType;

  constructor() { }

  ngOnInit(): void {
  }

}
