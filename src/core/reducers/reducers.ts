import { loginFormReducer } from "./login-form/login-form.reducer";
import { offerReducer } from "./offer/offer.reducer";
import { userReducer } from "./user/user.reducer";
import { _routeReducer } from "./_route/_route.reducer";
import { _toastReducer } from "./_toast/_toast.reducer";
import { _loaderReducer } from "./_loader/_loader.reducer";
import { pendingReducer } from "./pending/pending.reducer";
import { transactionReducer } from "./transaction/transaction.reducer";
import { takingsReducer } from "./takings/takings.reducer";
import { orderSummaryReducer } from "./order-summary/order-summary.reducer";
import { _modalReducer } from "./_modal/_modal.reducer";
import { offerFormReducer } from "./offer-form/offer-form.reducer";

export const reducers = {
  _route: _routeReducer,
  _toast: _toastReducer,
  _loader: _loaderReducer,
  _modal: _modalReducer,
  loginForm: loginFormReducer,
  offerForm: offerFormReducer,
  user: userReducer,
  offer: offerReducer,
  pending: pendingReducer,
  transaction: transactionReducer,
  takings: takingsReducer,
  orderSummary: orderSummaryReducer
}