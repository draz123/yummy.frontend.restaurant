import { of as observableOf, Observable, BehaviorSubject } from "rxjs";

import { catchError, map } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { Rest } from "../rest/rest";
import { Offer } from "../../models/offer";
import { HttpErrorResponse } from "@angular/common/http";
import { format } from "date-fns";

@Injectable()
export class OfferProvider {
  public offers$: BehaviorSubject<Offer[]>;

  constructor(private rest: Rest) {
    this.offers$ = new BehaviorSubject<Offer[]>([]);
  }

  public computeOffer(prevOffer: Offer, currOffer: Offer): Offer {
    let diff = this.getDiff(prevOffer, currOffer);

    return currOffer;
  }

  public getDiff(o1: any, o2: any): any {
    return Object.keys(o2).reduce((diff, key) => {
      if (o1[key] === o2[key]) return diff;
      return {
        ...diff,
        [key]: o2[key]
      };
    }, {});
  }

  public getOffers(): Observable<any> {
    return this.rest.getOffers().pipe(
      map((res: any) => ({
        ...res,
        offers: res.offers.map(this.parseOffer)
      })),
      catchError((err: HttpErrorResponse) => observableOf(err))
    );
  }

  public parseOffer(unparsed: Offer): Offer {
    const calculatePrice = () => {
      return Math.round((unparsed.price * (100 - unparsed.discount)) / 10) / 10;
    };

    return {
      ...unparsed,
      calculatedPrice: calculatePrice(),
      startDate: format(unparsed.receiveTimeStart, "HH:mm"),
      endDate: format(unparsed.receiveTimeEnd, "HH:mm")
    };
  }

  public deleteOffer(offer: Offer): Observable<any> {
    return this.rest.deleteOffer(offer.id).pipe(
      map(() => offer),
      catchError((err: HttpErrorResponse) => observableOf(err))
    );
  }

  public addOffer(offer: Offer): Observable<any> {
    return this.rest.postOffer(this.unparseOffer(offer)).pipe(
      map(() => this.unparseOffer(offer)),
      catchError((err: HttpErrorResponse) => observableOf(err))
    );
  }

  public unparseOffer(offer: Offer): Offer {
    const parseTime = (stringTime: string): number => {
      const date: Date = new Date();
      const year: number = date.getFullYear();
      const month: number = date.getMonth();
      const day: number = date.getDate();
      const [ hour, minute ] = stringTime.split(":");

      return new Date(year, month, day, Number(hour), Number(minute)).getTime();
    }
    const {
      image,
      discount,
      price,
      calculatedPrice,
      description,
      name,
      count,
      startDate,
      endDate
    } = offer;
    return {
      image,
      discount: Number(discount),
      price: Number(price),
      calculatedPrice: Number(calculatedPrice),
      description,
      name,
      count: Number(count),
      receiveTimeStart: parseTime(startDate),
      receiveTimeEnd: parseTime(endDate)
    };
  }

  public updateOffer(offer: Offer): Observable<any> {
    return this.rest.putOffer(offer).pipe(
      map(() => offer),
      catchError((err: HttpErrorResponse) => observableOf(err))
    );
  }
}
