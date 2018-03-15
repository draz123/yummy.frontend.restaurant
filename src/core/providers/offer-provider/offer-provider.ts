import { Injectable } from "@angular/core";
import { Rest } from "../rest/rest";
import { Offer } from "../../models/offer";

import { Observable, BehaviorSubject } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class OfferProvider {
  private offers$: BehaviorSubject<Offer[]>;

  constructor(private rest: Rest) {
    this.offers$ = new BehaviorSubject<Offer[]>([]);
  }

  getOffers(): Observable<Offer[] | HttpErrorResponse> {
    return this.rest
      .getOffers()
      .catch((err: HttpErrorResponse) => Observable.of(err));
  }
}
