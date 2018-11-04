import { of as observableOf, Observable } from "rxjs";

import { catchError, map } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { Rest } from "../rest/rest";
import { HttpErrorResponse } from "@angular/common/http";
import { Pending } from "../../models/pending";
import { format } from "date-fns";
import plLocale from "date-fns/locale/pl";

@Injectable()
export class PendingProvider {
  constructor(private rest: Rest) {}

  public getPendings(): Observable<any> {
    return this.rest.postPendings().pipe(
      map((res: any) => ({
        ...res,
        currentOrderList: res.currentOrderList.map(this.parsePending)
      })),
      catchError((err: HttpErrorResponse) => observableOf(err))
    );
  }

  public completePendings(ids: string[]): Observable<any> {
    return this.rest
      .updatePendings(ids, "COMPLETED")
      .pipe(catchError((err: HttpErrorResponse) => observableOf(err)));
  }

  public cancelPendings(ids: string[]): Observable<any> {
    return this.rest
      .updatePendings(ids, "CANCELED")
      .pipe(catchError((err: HttpErrorResponse) => observableOf(err)));
  }

  private parsePending(unparsed: Pending): Pending {
    const { orderTime, receiveTime } = unparsed;
    return {
      ...unparsed,
      parsedOrderDate: format(orderTime, "DD MMMM", {
        locale: plLocale
      }),
      parsedOrderTime: format(orderTime, "H:mm", {
        locale: plLocale
      }),
      parsedReceiveDate: format(receiveTime, "D MMMM", {
        locale: plLocale
      }),
      parsedReceiveTime: format(receiveTime, "H:mm", {
        locale: plLocale
      })
    };
  }
}
