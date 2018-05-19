import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from "rxjs";
import { Transaction } from '../../../core/models/transaction';
import { Store } from '@ngrx/store';
import { AppState } from '../../../core/app-state';

@Component({
  selector: 'transactions-list',
  templateUrl: 'transactions-list.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionsListComponent {

  private transactions$: Observable<Transaction[]>;
  private isFetching$: Observable<boolean>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.transactions$ = this.store.select((state) => state.transaction.data);
    this.isFetching$ = this.store.select((state) => state.transaction.isFetching);
  }

}
