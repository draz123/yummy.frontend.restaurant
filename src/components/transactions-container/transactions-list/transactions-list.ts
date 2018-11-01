import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Observable } from "rxjs";
import { Transaction } from "../../../core/models/transaction";
import { Store } from "@ngrx/store";
import { AppState } from "../../../core/app-state";
import * as fromTransactionActions from "../../../core/actions/transaction.actions";

@Component({
  selector: "transactions-list",
  templateUrl: "transactions-list.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionsListComponent {
  public transactions$: Observable<Transaction[]>;
  public isFetching$: Observable<boolean>;
  public page$: Observable<number>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.transactions$ = this.store.select((state) => state.transaction.data);
    this.isFetching$ = this.store.select(
      (state) => state.transaction.isFetching
    );
    this.page$ = this.store.select((state) => state.transaction.page);
  }

  public paginate(page: number): void {
    this.store.dispatch(new fromTransactionActions.PaginateTransactions(page));
  }
}
