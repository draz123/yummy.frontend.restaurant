import { Action } from "@ngrx/store";

export const UPDATE_USER = "[User] Update User";

export class UpdateUser implements Action {
  readonly type = UPDATE_USER;
  constructor(public payload: any) {}
}

export type UserActions = UpdateUser;