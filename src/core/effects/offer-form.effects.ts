import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";

import * as fromActions from "../actions/offer-form.actions";
import * as fromOfferActions from "../actions/offer.actions";
import { Store } from "@ngrx/store";
import { AppState } from "../app-state";
import { OfferFormState } from "../reducers/offer-form/offer-form.reducer";
import { OfferProvider } from "../providers/providers";
import { Offer } from "../models/offer";

@Injectable()
export class OfferFormEffects {
  constructor(
    private actions$: Actions,
    private offerProvider: OfferProvider,
    private store: Store<AppState>
  ) {}

  @Effect()
  public updateForm = this.actions$
    .ofType(fromActions.UPDATE_FORM)
    .pluck("payload")
    .map(([prevState, currState]) => this.offerProvider.computeOffer(prevState, currState))
    .map((offer: Offer) => Object.assign({
      data: offer
    }))
    .map((payload: OfferFormState) => new fromActions.UpdateFormSucc(payload));

  @Effect()
  public submitForm$ = this.actions$
    .ofType(fromActions.SUBMIT_FORM)
    .pluck("payload")
    .do((payload: OfferFormState) =>
      this.store.dispatch(new fromOfferActions.UpdateOffer(payload.data))
    )
    .map((payload: OfferFormState) => new fromActions.SubmitFormSucc(payload));

}
