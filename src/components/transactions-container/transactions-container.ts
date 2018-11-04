import { Component } from '@angular/core';
import { format } from 'date-fns';

@Component({
  selector: 'transactions-container',
  templateUrl: 'transactions-container.html'
})
export class TransactionsContainerComponent {
  public date: string = format(new Date(), 'DD-MM-YYYY');

  constructor() {}

}
