import { Actions, Effect } from "@ngrx/effects";
import { AppState } from "../app-state";
import { Store } from "@ngrx/store";
import { Observable } from 'rxjs';

import * as fromActions from "../actions/takings.actions";
import * as fromOrderSummaryActions from "../actions/order-summary.actions";

import { Rest } from "../providers/rest/rest";
import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class TakingsEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private rest: Rest
  ) {}

  @Effect()
  public fetchTakings$ = this.actions$
    .ofType(fromActions.FETCH_TAKINGS)
    .switchMap(() => this.rest.getTakings())
    .catch((err) => Observable.of(err))
    .do((res: HttpErrorResponse | any) => this.handleOrderSummary(res))
    .map((res: HttpErrorResponse | any) => this.handleTakings(res));

  handleTakings(res: HttpErrorResponse | any): fromActions.TakingsActions {
    return (!(res instanceof HttpErrorResponse) && res.takings) 
        ? new fromActions.FetchTakingsSucc(res.takings)
        : new fromActions.FetchTakingsFail()
  }

  handleOrderSummary(res: HttpErrorResponse | any): void {
    if (!(res instanceof HttpErrorResponse) && res.orderSummary) {
      this.store.dispatch(new fromOrderSummaryActions.GetOrderSummary(res.orderSummary))
    }
  }
}