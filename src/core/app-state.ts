import { OfferState } from "./reducers/offer/offer.reducer";
import { LoginFormState } from "./reducers/login-form/login-form.reducer";
import { UserState } from "./reducers/user/user.reducer";
import { _RouteState } from "./reducers/_route/_route.reducer";
import { _LoaderState } from "./reducers/_loader/_loader.reducer";
import { _ToastState } from "./reducers/_toast/_toast.reducer";
import { PendingState } from "./reducers/pending/pending.reducer";
import { TransactionState } from "./reducers/transaction/transaction.reducer";
import { TakingsState } from "./reducers/takings/takings.reducer";
import { OrderSummaryState } from "./reducers/order-summary/order-summary.reducer";
import { _ModalState } from "./reducers/_modal/_modal.reducer";
import { OfferFormState } from "./reducers/offer-form/offer-form.reducer";

export interface AppState {
  _route: _RouteState,
  _loader: _LoaderState,
  _toast: _ToastState,
  _modal: _ModalState,
  loginForm: LoginFormState,
  offerForm: OfferFormState,
  user: UserState,
  offer: OfferState,
  pending: PendingState,
  transaction: TransactionState,
  takings: TakingsState,
  orderSummary: OrderSummaryState
}