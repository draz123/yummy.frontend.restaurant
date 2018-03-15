import { ActionReducer, Action } from "@ngrx/store";
import { Offer } from "../../models/offer";
import * as fromAction from "../../actions/offer.actions";

export interface OfferState {
  data: Offer[];
}

const initialState: OfferState = {
  data: []
};

export const offerReducer: ActionReducer<OfferState> = (
  state: OfferState = initialState,
  action: Action | any
) => {
  switch (action.type) {
    case fromAction.OFFERS_FROM_SUCC:
      return Object.assign({}, state, {
        data: [...state.data, ...action.payload]
      });
    default:
      return state;
  }
};
