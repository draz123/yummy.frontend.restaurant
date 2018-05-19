import { Action } from "@ngrx/Store";
import { Offer } from "../models/offer";

export const ADD_OFFER = "[Offer] Add Offer";
export const UPDATE_OFFER = "[Offer] Update Offer";
export const UPDATE_OFFER_SUCC = "[Offer] Update Offer Succ";
export const UPDATE_OFFER_FAIL = "[Offer] Update Offer Fail";
export const DELETE_OFFER = "[Offer] Delete Offer";
export const DELETE_OFFER_SUCC = "[Offer] Delete Offer Succ";
export const DELETE_OFFER_FAIL = "[Offer] Delete Offer Fail";
export const FETCH_OFFERS = "[Offer] Fetch Offers";
export const FETCH_OFFERS_SUCC = "[Offer] Fetch Offers Succ";
export const FETCH_OFFERS_FAIL = "[Offer] Fetch Offers Fail";

export class AddOffer implements Action {
  readonly type = ADD_OFFER;
  constructor(public payload: Offer) {}
}

export class UpdateOffer implements Action {
  readonly type = UPDATE_OFFER;
  constructor(public payload: Offer) {}
}

export class UpdateOfferSucc implements Action {
  readonly type = UPDATE_OFFER_SUCC;
  constructor(public payload: Offer) {}
}

export class UpdateOfferFail implements Action {
  readonly type = UPDATE_OFFER_FAIL;
}

export class DeleteOffer implements Action {
  readonly type = DELETE_OFFER;
  constructor(public payload: Offer) {}
}

export class DeleteOfferSucc implements Action {
  readonly type = DELETE_OFFER_SUCC;
  constructor(public payload: Offer) {}
}

export class DeleteOfferFail implements Action {
  readonly type = DELETE_OFFER_FAIL;
}

export class FetchOffers implements Action {
  readonly type = FETCH_OFFERS;
}
export class FetchOffersSucc implements Action {
  readonly type = FETCH_OFFERS_SUCC;
  constructor(public payload: any) {}
}
export class FetchOffersFail implements Action {
  readonly type = FETCH_OFFERS_FAIL;
}

export type OfferActions =
  | AddOffer
  | UpdateOffer
  | UpdateOfferSucc
  | UpdateOfferFail
  | DeleteOffer
  | FetchOffers
  | FetchOffersSucc
  | FetchOffersFail;
