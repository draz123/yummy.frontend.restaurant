
import {of as observableOf,  Observable } from 'rxjs';

import {catchError} from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { Rest } from "../rest/rest";
import { HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class PendingProvider {
  
  constructor(private rest: Rest) {}

  getPendings(): Observable<any> {
    return this.rest
      .postPendings().pipe(
      catchError((err: HttpErrorResponse) => observableOf(err)));
  }

  createPendings(number: number): Observable<any> {
    return this.rest.createPending({
      transactions: Array(number).fill(null).map(() => Object.assign({
        offerId: Math.floor(Math.random() * 5) + 13,
        count: 1
      })),
      receiveTimestamp: "2019-04-08T18:30:00"
    });
  }

  completePendings(ids: string[]): Observable<any> {
    return this.rest
      .updatePendings(ids, 'COMPLETED').pipe(
      catchError((err: HttpErrorResponse) => observableOf(err)));
  }

  cancelPendings(ids: string[]): Observable<any> {
    return this.rest
      .updatePendings(ids, 'CANCELED').pipe(
      catchError((err: HttpErrorResponse) => observableOf(err)));
  }

}