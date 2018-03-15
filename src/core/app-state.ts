import { OfferState } from "./reducers/offer/offer.reducer";
import { LoginFormState } from "./reducers/login-form/login-form.reducer";
import { UserState } from "./reducers/user/user.reducer";
import { _RouteState } from "./reducers/_route/_route.reducer";
import { _LoaderState } from "./reducers/_loader/_loader.reducer";
import { _ToastState } from "./reducers/_toast/_toast.reducer";

export interface AppState {
  _route: _RouteState,
  _loader: _LoaderState,
  _toast: _ToastState,
  loginForm: LoginFormState,
  user: UserState,
  offer: OfferState
}