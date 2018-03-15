import { Action } from "@ngrx/Store";
import { Offer } from "../models/offer";

export const ADD_OFFER = "[Offer] Add Offer";
export const UPDATE_OFFER = "[Offer] Update Offer";
export const DELETE_OFFER = "[Offer] Delete Offer";
export const OFFERS_TO = "[Offer] Offers To";
export const OFFERS_FROM = "[Offers] Offers From";
export const OFFERS_FROM_SUCC = "[Offers] Offers From Succ";
export const OFFERS_FROM_FAIL = "[Offers] Offers From Fail";

export class AddOffer implements Action {
  readonly type = ADD_OFFER;
  constructor(public payload: Offer) {}
}

export class UpdateOffer implements Action {
  readonly type = UPDATE_OFFER;
  constructor(public payload: Offer) {}
}

export class DeleteOffer implements Action {
  readonly type = UPDATE_OFFER;
  constructor(public payload: string) {}
}

export class OffersFrom implements Action {
  readonly type = OFFERS_FROM;
}

export class OffersFromSucc implements Action {
  readonly type = OFFERS_FROM_SUCC;
  constructor(public payload: Offer[]) {}
}

export class OffersFromFail implements Action {
  readonly type = OFFERS_FROM_FAIL;
}

export type OfferActions =
  | AddOffer
  | UpdateOffer
  | DeleteOffer
  | OffersFromSucc
  | OffersFromFail;
