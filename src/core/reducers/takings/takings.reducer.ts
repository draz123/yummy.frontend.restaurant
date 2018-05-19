import { ActionReducer, Action } from "@ngrx/store";
import { Takings } from "../../models/takings";
import * as fromAction from "../../actions/takings.actions";

export interface TakingsState {
  data: Takings[],
  isFetching?: boolean
}

const initialState: TakingsState = {
  data: [],
  isFetching: false
};

export const takingsReducer: ActionReducer<TakingsState> = (
  state: TakingsState = initialState,
  action: Action | any
) => {
  switch (action.type) {
    case fromAction.FETCH_TAKINGS_SUCC:
      return {
        ...state,
        data: action.payload
      }
    default:
      return state;
  }
};