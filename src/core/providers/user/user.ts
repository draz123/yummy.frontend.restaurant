import { Injectable } from "@angular/core";
import { Rest } from "../rest/rest";
import { map, catchError } from "rxjs/operators";
import { of as observableOf, Observable } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";
import { User } from "../../models/user";

@Injectable()
export class UserProvider {
  constructor(private rest: Rest) {}

  public fetchUser(): Observable<User> {
    return this.rest.getUserInfo().pipe(
      map(
        ({ code, email, message, ...rest }) =>
          ({
            ...rest,
            login: email
          } as any)
      ),
      catchError((err: HttpErrorResponse) => observableOf(err))
    );
  }
}
