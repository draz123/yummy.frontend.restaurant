
import {of as observableOf,  Observable, BehaviorSubject } from 'rxjs';

import {catchError, map} from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { Rest } from "../rest/rest";
import { Offer } from "../../models/offer";
import { HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class OfferProvider {
  private offers$: BehaviorSubject<Offer[]>;

  constructor(private rest: Rest) {
    this.offers$ = new BehaviorSubject<Offer[]>([]);
  }

  computeOffer(prevOffer: Offer, currOffer: Offer): Offer {
    console.log(prevOffer, currOffer)
    let diff = this.getDiff(prevOffer, currOffer);
    console.log(diff);

    return currOffer;
  }

  getDiff(o1: any, o2: any): any {
    return Object.keys(o2).reduce((diff, key) => {
      if (o1[key] === o2[key]) return diff
      return {
        ...diff,
        [key]: o2[key]
      }
    }, {});
  }

  getOffers(): Observable<any> {
    return this.rest
      .getOffers().pipe(
      catchError((err: HttpErrorResponse) => observableOf(err)));
  }

  deleteOffer(offer: Offer): Observable<any> {
    return this.rest
      .deleteOffer(offer.id).pipe(
      map(() => offer),
      catchError((err: HttpErrorResponse) => observableOf(err)),);
  }

  updateOffer(offer: Offer): Observable<any> {
    return this.rest
      .putOffer(offer).pipe(
      map(() => offer),
      catchError((err: HttpErrorResponse) => observableOf(err)),);
  }
}
