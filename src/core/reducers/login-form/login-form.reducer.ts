import { LoginForm } from "../../models/login-form";
import * as fromActions from "../../actions/login-form.actions";

export interface LoginFormState {
  data: LoginForm;
}

const initialState: any = {
  data: new LoginForm()
};

export const loginFormReducer = (
  state: LoginFormState = initialState,
  action: fromActions.LoginFormActions
) => {
  switch (action.type) {
    case fromActions.UPDATE_FORM:
      return Object.assign({}, state, action.payload);
    case fromActions.SUBMIT_FORM_SUCC:
      return Object.assign({}, initialState);
    default:
      return state;
  }
};
