import { ActionReducer, Action } from "@ngrx/store";
import { Offer } from "../../models/offer";
import * as fromAction from "../../actions/offer.actions";

export interface OfferState {
  data: Offer[],
  isFetching?: boolean
}

const initialState: OfferState = {
  data: [],
  isFetching: false
};

export const offerReducer: ActionReducer<OfferState> = (
  state: OfferState = initialState,
  action: Action | any
) => {
  switch (action.type) {
    case fromAction.UPDATE_OFFER:
      return {
        ...state,
        data: state.data.map((offer: Offer) => {
          return offer.id !== action.payload.id
            ? offer
            : new Offer(action.payload)
        })
      }
    case fromAction.FETCH_OFFERS:
      return {
        ...state,
        isFetching: true
      }
    case fromAction.FETCH_OFFERS_SUCC:
      return {
        ...state,
        data: action.payload.map((offer: Offer) => new Offer(offer)),
        isFetching: false
      }
    case fromAction.FETCH_OFFERS_FAIL:
      return {
        ...state,
        isFetching: false
      }
    default:
      return state;
  }
};
