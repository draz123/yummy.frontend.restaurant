import { Action } from "@ngrx/store";
import { OfferFormState } from "../reducers/offer-form/offer-form.reducer";

export const UPDATE_FORM = "[OfferForm] Update Form";
export const UPDATE_FORM_SUCC = "[OfferForm] Update Form Succ";
export const UPDATE_FORM_FAIL = "[OfferForm] Update Form Fail";
export const SUBMIT_FORM = "[OfferForm] Submit Form";
export const SUBMIT_FORM_SUCC = "[OfferForm] Submit Form Succ";
export const SUBMIT_FORM_FAIL = "[OfferForm] Submit Form Fail";

export class UpdateForm implements Action {
  readonly type = UPDATE_FORM;
  constructor(public payload: any) {}
}
export class UpdateFormSucc implements Action {
  readonly type = UPDATE_FORM_SUCC;
  constructor(public payload: any) {}
}
export class UpdateFormFail implements Action {
  readonly type = UPDATE_FORM_FAIL;
}

export class SubmitForm implements Action {
  readonly type = SUBMIT_FORM;
  constructor(public payload: OfferFormState) {}
}

export class SubmitFormSucc implements Action {
  readonly type = SUBMIT_FORM_SUCC;
  constructor(public payload: OfferFormState) {}
}

export class SubmitFormFail implements Action {
  readonly type = SUBMIT_FORM_FAIL;
}

export type OfferFormActions =
  | UpdateForm
  | SubmitForm
  | SubmitFormSucc
  | SubmitFormFail;
