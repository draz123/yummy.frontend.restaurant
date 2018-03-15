import { Component } from '@angular/core';

/**
 * Generated class for the SummaryChartComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'summary-chart',
  templateUrl: 'summary-chart.html'
})
export class SummaryChartComponent {

  text: string;

  constructor() {
    console.log('Hello SummaryChartComponent Component');
    this.text = 'Hello World';
  }

}
