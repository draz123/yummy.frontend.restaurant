import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { HttpErrorResponse } from "@angular/common/http";

import * as fromActions from "../actions/user.actions";
import { switchMap, map } from "rxjs/operators";
import { User } from "../models/user";
import { UserProvider } from "../providers/user/user";

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private userProvider: UserProvider
  ) {}

  @Effect()
  public fetchUser$ = this.actions$.ofType(fromActions.FETCH_USER).pipe(
    switchMap(() => this.userProvider.fetchUser()),
    map(
      (res: User | HttpErrorResponse) =>
        res instanceof HttpErrorResponse
          ? new fromActions.FetchUserFail()
          : new fromActions.FetchUserSucc(res)
    )
  );
}
