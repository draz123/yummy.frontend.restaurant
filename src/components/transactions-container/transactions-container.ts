import { Component } from '@angular/core';

/**
 * Generated class for the TransactionsContainerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'transactions-container',
  templateUrl: 'transactions-container.html'
})
export class TransactionsContainerComponent {

  text: string;

  constructor() {
    console.log('Hello TransactionsContainerComponent Component');
    this.text = 'Hello World';
  }

}
