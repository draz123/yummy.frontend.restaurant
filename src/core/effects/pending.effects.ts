import { Actions, Effect } from "@ngrx/effects";
import { PendingProvider } from "../providers/pending-provider/pending-provider";
import { Injectable } from "@angular/core";
import * as fromActions from "../actions/pending.actions";
import * as fromTransactionActions from "../actions/transaction.actions";
import * as fromLoaderActions from "../actions/_loader.actions";
import { HttpErrorResponse } from "@angular/common/http";
import { Store } from "@ngrx/store";
import { AppState } from "../app-state";

@Injectable()
export class PendingEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private pendingProvider: PendingProvider
  ) {}

  @Effect()
  public getPendings$ = this.actions$
    .ofType(fromActions.FETCH_PENDINGS)
    .switchMap(() => this.pendingProvider.getPendings())
    .map((res: any | HttpErrorResponse) => {
      return (!(res instanceof HttpErrorResponse) && res.currentOrderList)
        ? new fromActions.FetchPendingsSucc(res.currentOrderList)
        : new fromActions.FetchPendingsFail();
    });

  @Effect()
  public completePendings$ = this.actions$
    .ofType(fromActions.COMPLETE_PENDINGS)
    .pluck('payload')
    .do(() => this.store.dispatch(new fromLoaderActions.Show("Akceptowanie zamówień...")))
    .switchMap((payload: string[]) => this.pendingProvider.completePendings(payload))
    .do(() => this.store.dispatch(new fromLoaderActions.Hide))
    .do((res: any | HttpErrorResponse) => {
      if (!(res instanceof HttpErrorResponse)) {
        this.store.dispatch(new fromActions.FetchPendings({}));
        this.store.dispatch(new fromTransactionActions.FetchTransactions({}))
      } 
    })
    .map((res: any | HttpErrorResponse) => {
      return (!(res instanceof HttpErrorResponse))
        ? new fromActions.CompletePendingsSucc(res)
        : new fromActions.CompletePendingsFail();
    });

  @Effect()
  public cancelPendings$ = this.actions$
    .ofType(fromActions.CANCEL_PENDINGS)
    .pluck('payload')
    .do(() => this.store.dispatch(new fromLoaderActions.Show("Odrzucanie zamówień...")))
    .switchMap((payload: string[]) => this.pendingProvider.cancelPendings(payload))
    .do(() => this.store.dispatch(new fromLoaderActions.Hide))
    .do((res: any | HttpErrorResponse) => {
      if (!(res instanceof HttpErrorResponse)) {
        this.store.dispatch(new fromActions.FetchPendings({}));
        this.store.dispatch(new fromTransactionActions.FetchTransactions({}))
      } 
    })
    .map((res: any | HttpErrorResponse) => {
      return (!(res instanceof HttpErrorResponse))
        ? new fromActions.CancelPendingsSucc(res)
        : new fromActions.CancelPendingsFail();
    });
}