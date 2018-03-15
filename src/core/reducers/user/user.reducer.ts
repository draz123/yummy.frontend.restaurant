import { User } from "../../models/user";
import * as fromActions from "../../actions/user.actions";

export interface UserState {
  data: User;
}

const initialState: any = {
  data: new User()
};

export const userReducer = (
  state: UserState = initialState,
  action: fromActions.UserActions
) => {
  switch (action.type) {
    case fromActions.UPDATE_USER:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};
