
import {of as observableOf,  Observable } from 'rxjs';

import {catchError, map} from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { Rest } from "../rest/rest";
import { HttpErrorResponse } from "@angular/common/http";
import { Transaction } from '../../models/transaction';
import { format } from 'date-fns';
import plLocale from 'date-fns/locale/pl';

@Injectable()
export class TransactionsProvider {
  
  constructor(private rest: Rest) {}

  public getTransactions(): Observable<any> {
    return this.rest
      .getTransactions().pipe(
        map((res: any) => ({
          ...res,
          currentOrderList: res.currentOrderList.map(this.parseTransaction)
        })),
        catchError((err: HttpErrorResponse) => observableOf(err))
      );
  }

  private parseTransaction(unparsed: Transaction): Transaction {
    const { orderTime, receiveTime } = unparsed;
    return {
      ...unparsed,
      parsedOrderDate: format(orderTime, 'DD MMMM', {
        locale: plLocale
      }),
      parsedOrderTime: format(orderTime, 'H:mm', {
        locale: plLocale
      }),
      parsedReceiveDate: format(receiveTime, 'D MMMM', {
        locale: plLocale
      }),
      parsedReceiveTime: format(receiveTime, 'H:mm', {
        locale: plLocale
      }),
    }
  }

}