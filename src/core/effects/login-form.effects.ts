import { take, pluck, tap, switchMap, map } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { HttpErrorResponse } from "@angular/common/http";

import * as fromActions from "../actions/login-form.actions";
import * as fromUserActions from "../actions/user.actions";
import * as fromLoaderActions from "../actions/_loader.actions";
import * as fromToastActions from "../actions/_toast.actions";
import * as fromRouteActions from "../actions/_route.actions";
import { LoginProvider } from "../providers/providers";
import { LoginFormState } from "../reducers/login-form/login-form.reducer";
import { Store } from "@ngrx/store";
import { AppState } from "../app-state";
import { _Route } from "../models/_route";

declare let sessionStorage;

@Injectable()
export class LoginFormEffects {
  constructor(
    private actions$: Actions,
    private loginProvider: LoginProvider,
    private store: Store<AppState>
  ) {}

  @Effect()
  public loginUser$ = this.actions$.ofType(fromActions.SUBMIT_FORM).pipe(
    pluck("payload"),
    tap(() => this.handleSideBefore()),
    switchMap((payload: LoginFormState) =>
      this.loginProvider.loginUser(payload.data)
    ),
    tap((res: null | HttpErrorResponse) => this.handleSideAfter(res)),
    map((res: null | HttpErrorResponse) => this.handleLoginRes(res))
  );

  private handleLoginRes(
    res: null | HttpErrorResponse
  ): fromActions.LoginFormActions {
    return res instanceof HttpErrorResponse
      ? new fromActions.SubmitFormFail()
      : new fromActions.SubmitFormSucc();
  }

  private handleSideBefore(): void {
    this.store.dispatch(new fromLoaderActions.Show("Logowanie..."));
  }

  private handleSideAfter(res: null | HttpErrorResponse): void {
    this.store.dispatch(new fromLoaderActions.Hide());
    if (!(res instanceof HttpErrorResponse)) {
      this.updateUser();
      this.store.dispatch(new fromRouteActions.Push(new _Route("dashboard")));
    } else {
      this.store.dispatch(
        new fromToastActions.Show(
          "Wprowadzone hasło jest nieprawidłowe. Proszę, spróbuj jeszcze raz."
        )
      );
    }
  }

  private updateUser(): void {
    this.store
      .select((state) => state.loginForm)
      .pipe(
        take(1),
        tap((res: LoginFormState) => (sessionStorage.__mail = res.data.login))
      )
      .subscribe((data: LoginFormState) => {
        this.store.dispatch(new fromUserActions.FetchUser());
      });
  }
}
