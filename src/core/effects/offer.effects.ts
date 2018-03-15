import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import * as fromActions from "../actions/offer.actions";
import { OfferProvider } from "../providers/offer-provider/offer-provider";
import { Offer } from "../models/offer";
import { HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class OfferEffects {
  constructor(
    private actions$: Actions,
    private offerProvider: OfferProvider
  ) {}

  @Effect()
  public getOffers$ = this.actions$
    .ofType(fromActions.OFFERS_FROM)
    .switchMap(() => this.offerProvider.getOffers())
    .map((res: Offer[] | HttpErrorResponse) => {
      return res instanceof HttpErrorResponse
        ? new fromActions.OffersFromFail()
        : new fromActions.OffersFromSucc(res);
    });
}
