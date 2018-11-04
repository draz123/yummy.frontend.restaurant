import { pluck, tap, map } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";

import * as fromActions from "../actions/offer-form.actions";
import * as fromOfferActions from "../actions/offer.actions";
import * as fromToastActions from "../actions/_toast.actions";
import { Store } from "@ngrx/store";
import { AppState } from "../app-state";
import { OfferFormState } from "../reducers/offer-form/offer-form.reducer";
import { OfferProvider } from "../providers/providers";
import { Offer } from "../models/offer";
import { HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class OfferFormEffects {
  constructor(
    private actions$: Actions,
    private offerProvider: OfferProvider,
    private store: Store<AppState>
  ) {}

  @Effect()
  public submitForm$ = this.actions$.ofType(fromActions.SUBMIT_FORM).pipe(
    pluck("payload"),
    map(this.checkForFields),
    tap((payload: OfferFormState | HttpErrorResponse) =>
      this.store.dispatch(
        payload instanceof HttpErrorResponse
          ? new fromToastActions.Show("Proszę, uzupełnij wszystkie pola.")
          : new fromOfferActions.UpdateOffer(payload.data)
      )
    ),
    map(
      (payload: OfferFormState | HttpErrorResponse) =>
        payload instanceof HttpErrorResponse
          ? new fromActions.SubmitFormFail()
          : new fromActions.SubmitFormSucc(payload)
    )
  );

  private checkForFields(
    payload: OfferFormState
  ): OfferFormState | HttpErrorResponse {
    let { name, price, discount, count, startDate, endDate } = payload.data;

    return name && price && discount && count && startDate && endDate
      ? payload
      : new HttpErrorResponse({
          status: -1
        });
  }
}
