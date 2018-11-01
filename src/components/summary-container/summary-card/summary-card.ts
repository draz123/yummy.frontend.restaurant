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
  public acceptedOrders$: Observable<number>;
  public canceledOrders$: Observable<number>;
  public completedOrders$: Observable<number>;
  public missedOrders$: Observable<number>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.acceptedOrders$ = this.store.select(state => state.orderSummary.data.acceptedOrders);
    this.canceledOrders$ = this.store.select(state => state.orderSummary.data.canceledOrders);
    this.completedOrders$ = this.store.select(state => state.orderSummary.data.completedOrders);
    this.missedOrders$ = this.store.select(state => state.orderSummary.data.missedOrders);
  }


}
