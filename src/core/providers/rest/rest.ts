import { Injectable } from "@angular/core";
import { Api } from "../api/api";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { Offer } from "../../models/offer";
import { AppConfig } from "../../../app/app.config";

export interface LoginUserBody {
  email: string;
  password: string;
}

export interface OfferBody extends Offer {};

@Injectable()
export class Rest extends Api {
  private config: any;

  constructor(public http: HttpClient) {
    super(http);
    this.config = AppConfig.rest;
  }

  parseUrl(endpoint: string): string {
    let { rootUrl: root } = this.config;

    return `${root}/${endpoint}`;
  }

  loginUser(body: LoginUserBody): Observable<any> {
    return this.post(this.parseUrl("login"), body);
  }

  getTakings(): Observable<any> {
    return this.get(this.parseUrl("balance"));
  }

  createPending(body: any): Observable<any> {
    return this.post(this.parseUrl('transaction'), body);
  }

  postPendings(
    page: number = 0,
    size: number = 8
  ): Observable<any> {
    return this.post(this.parseUrl("orders/current"), {
      page: page,
      size: size
    });
  }

  updatePendings(
    ids: string[],
    state: 'COMPLETED' | 'CANCELED'
  ): Observable<any> {
    return this.post(this.parseUrl("orders/state"), {
      idList: ids,
      state: state
    });
  }

  getOffers(): Observable<any> {
    return this.get(this.parseUrl("offers"));
  }

  getSingleOffer(id: string): Observable<any> {
    return this.get(this.parseUrl("offer"), {
      id: id
    });
  }

  postOffer(body: OfferBody): Observable<any> {
    return this.post(this.parseUrl(`offer`), body);
  }

  deleteOffer(id: string | number): Observable<any> {
    return this.get(this.parseUrl(`offer/delete?id=${id}`));
  }

  putOffer(body: OfferBody): Observable<any> {
    return this.post(this.parseUrl(`offer?id=${body.id}`), body);
  }

  getTransactions(
    page: number = 0,
    size: number = 8
  ): Observable<any> {
    return this.get(this.parseUrl("orders"), {
      page: page,
      size: size
    });
  }

}
