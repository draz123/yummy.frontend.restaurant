import { ActionReducer, Action } from "@ngrx/store";
import { Pending } from "../../models/pending";
import * as fromAction from "../../actions/pending.actions";

export interface PendingState {
  data: Pending[];
  page: number,
  isFetching?: boolean;
}

const initialState: PendingState = {
  data: [],
  page: 1,
  isFetching: false
};

export const pendingReducer: ActionReducer<PendingState> = (
  state: PendingState = initialState,
  action: Action | any
) => {
  switch (action.type) {
    case fromAction.FETCH_PENDINGS:
      return {
        ...state,
        isFetching: true
      };
    case fromAction.FETCH_PENDINGS_SUCC:
      return {
        ...state,
        data: action.payload,
        isFetching: false
      };
    case fromAction.FETCH_PENDINGS_FAIL:
      return {
        ...state,
        isFetching: false
      };
    case fromAction.MARK_PENDING:
      return {
        ...state,
        data: state.data.map((pending: Pending) => {
          return pending.id !== action.payload.id
            ? pending
            : {
                ...pending,
                isMarked: !pending.isMarked
              };
        })
      };
    case fromAction.PAGINATE_PENDINGS:
      return {
        ...state,
        page: action.payload
      }
    default:
      return state;
  }
};
