import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { HttpErrorResponse } from "@angular/common/http";

import * as fromActions from "../actions/login-form.actions";
import { LoginProvider } from "../providers/providers";

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private loginProvider: LoginProvider
  ) {}
}
