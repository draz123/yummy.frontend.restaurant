import { _Route } from "../../models/_route";
import * as fromActions from "../../actions/_route.actions";

export interface _RouteState {
  data: _Route[];
}

const initialState: any = {
  data: [
    new _Route('welcome', {})
  ]
};

export const _routeReducer = (
  state: _RouteState = initialState,
  action: fromActions._RouteActions | any
) => {
  switch (action.type) {
    case fromActions.PUSH:
      return Object.assign({}, state, {
        data: [...state.data, action.payload]
      });
    case fromActions.POP:
      return Object.assign({}, state, {
        data: [...state.data.splice(-1,1)]
      });
    default:
      return state;
  }
};