import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../core/app-state';
import { OrderSummary } from '../../../core/models/order-summary';
import { Observable } from 'rxjs';

@Component({
  selector: 'summary-card',
  templateUrl: 'summary-card.html'
})
export class SummaryCardComponent {

  orderSummary$: Observable<OrderSummary>

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.orderSummary$ = this.store.select(state => state.orderSummary.data);
  }


}
