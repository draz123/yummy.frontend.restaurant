import { OrderSummary } from "../../models/order-summary";
import * as fromActions from "../../actions/order-summary.actions";

export interface OrderSummaryState {
  data: OrderSummary;
}

const initialState: any = {
  data: new OrderSummary()
};

export const orderSummaryReducer = (
  state: OrderSummaryState = initialState,
  action: fromActions.OrderSummaryActions | any
) => {
  switch (action.type) {
    case fromActions.GET_ORDER_SUMMARY:
      return { 
        ...state, 
        data: new OrderSummary(action.payload)
      };
    default:
      return state;
  }
};