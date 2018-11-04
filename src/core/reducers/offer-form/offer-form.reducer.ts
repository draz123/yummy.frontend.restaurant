import { OfferForm } from "../../models/offer-form";
import * as fromActions from "../../actions/offer-form.actions";

export interface OfferFormState {
  data: OfferForm;
}

const initialState: any = {
  data: new OfferForm()
};

export const offerFormReducer = (
  state: OfferFormState = initialState,
  action: fromActions.OfferFormActions | any
) => {
  switch (action.type) {
    case fromActions.UPDATE_FORM:
      return { 
        ...state, 
        data: {
          ...state.data,
          ...action.payload
       }
      };
    case fromActions.SUBMIT_FORM_SUCC:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
};