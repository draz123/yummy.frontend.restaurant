import { loginFormReducer } from "./login-form/login-form.reducer";
import { offerReducer } from "./offer/offer.reducer";
import { userReducer } from "./user/user.reducer";
import { _routeReducer } from "./_route/_route.reducer";
import { _toastReducer } from "./_toast/_toast.reducer";
import { _loaderReducer } from "./_loader/_loader.reducer";

export const reducers = {
  _route: _routeReducer,
  _toast: _toastReducer,
  _loader: _loaderReducer,
  loginForm: loginFormReducer,
  user: userReducer,
  offer: offerReducer
}