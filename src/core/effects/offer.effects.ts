import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import * as fromActions from "../actions/offer.actions";
import * as fromLoaderActions from "../actions/_loader.actions";
import { OfferProvider } from "../providers/offer-provider/offer-provider";
import { Offer } from "../models/offer";
import { HttpErrorResponse } from "@angular/common/http";
import { Store } from "@ngrx/store";
import { AppState } from "../app-state";

@Injectable()
export class OfferEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private offerProvider: OfferProvider
  ) {}

  @Effect()
  public getOffers$ = this.actions$
    .ofType(fromActions.FETCH_OFFERS)
    .switchMap(() => this.offerProvider.getOffers())
    .map((res: any | HttpErrorResponse) => {
      return (!(res instanceof HttpErrorResponse) && res.offers)
        ? new fromActions.FetchOffersSucc(res.offers)
        : new fromActions.FetchOffersFail;
    });

  @Effect()
  public deleteOffer$ = this.actions$
    .ofType(fromActions.DELETE_OFFER)
    .pluck("payload")
    .do(() => this.store.dispatch(new fromLoaderActions.Show("Usuwanie oferty...")))
    .switchMap((payload: Offer) => this.offerProvider.deleteOffer(payload))
    .do(() => this.store.dispatch(new fromLoaderActions.Hide))
    .map((res: Offer | HttpErrorResponse) => {
      return (!(res instanceof HttpErrorResponse))
        ? new fromActions.DeleteOfferSucc(res)
        : new fromActions.DeleteOfferFail;
    });

  @Effect()
  public updateOffer$ = this.actions$
    .ofType(fromActions.UPDATE_OFFER)
    .pluck("payload")
    .do(() => this.store.dispatch(new fromLoaderActions.Show("Aktualizacja oferty...")))
    .switchMap((payload: Offer) => this.offerProvider.updateOffer(payload))
    .do(() => this.store.dispatch(new fromLoaderActions.Hide))
    .map((res: Offer | HttpErrorResponse) => {
      return (!(res instanceof HttpErrorResponse))
        ? new fromActions.UpdateOfferSucc(res)
        : new fromActions.UpdateOfferFail;
    });
}
