import { Component } from '@angular/core';

/**
 * Generated class for the SummaryCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'summary-card',
  templateUrl: 'summary-card.html'
})
export class SummaryCardComponent {

  text: string;

  constructor() {
    console.log('Hello SummaryCardComponent Component');
    this.text = 'Hello World';
  }

}
