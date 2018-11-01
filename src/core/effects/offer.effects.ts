
import {map, pluck, tap, switchMap} from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import * as fromActions from "../actions/offer.actions";
import * as fromLoaderActions from "../actions/_loader.actions";
import { OfferProvider } from "../providers/offer-provider/offer-provider";
import { Offer } from "../models/offer";
import { HttpErrorResponse } from "@angular/common/http";
import { Store } from "@ngrx/store";
import { AppState } from "../app-state";
import { StompProvider } from "../providers/providers";

@Injectable()
export class OfferEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private offerProvider: OfferProvider,
    private stompProvider: StompProvider
  ) {}

  @Effect()
  public deleteOffer$ = this.actions$
    .ofType(fromActions.DELETE_OFFER).pipe(
    pluck("payload"),
    tap(() => this.store.dispatch(new fromLoaderActions.Show("Usuwanie oferty..."))),
    switchMap((payload: Offer) => this.offerProvider.deleteOffer(payload)),
    tap(() => this.store.dispatch(new fromLoaderActions.Hide)),
    map((res: Offer | HttpErrorResponse) => {
      return (!(res instanceof HttpErrorResponse))
        ? new fromActions.DeleteOfferSucc(res)
        : new fromActions.DeleteOfferFail;
    }),);

  @Effect()
  public updateOffer$ = this.actions$
    .ofType(fromActions.UPDATE_OFFER).pipe(
    pluck("payload"),
    tap(() => this.store.dispatch(new fromLoaderActions.Show("Aktualizacja oferty..."))),
    switchMap((payload: Offer) => this.offerProvider.updateOffer(payload)),
    tap(() => this.store.dispatch(new fromLoaderActions.Hide)),
    map((res: Offer | HttpErrorResponse) => {
      return (!(res instanceof HttpErrorResponse))
        ? new fromActions.UpdateOfferSucc(res)
        : new fromActions.UpdateOfferFail;
    }),);

  @Effect()
  public socketOffers$ = this.stompProvider
    .connectSockets('/topic/orders/current').pipe(
    map((res: any | HttpErrorResponse) => {
      return (!(res instanceof HttpErrorResponse) && res.offers)
        ? new fromActions.FetchOffersSucc(res.offers)
        : new fromActions.FetchOffersFail;
    }));
}
