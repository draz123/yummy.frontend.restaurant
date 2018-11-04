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

  private parseUrl(endpoint: string): string {
    let { rootUrl: root } = this.config;

    return `${root}/${endpoint}`;
  }

  public loginUser(body: LoginUserBody): Observable<any> {
    return this.post(this.parseUrl("login"), body);
  }

  public getTakings(): Observable<any> {
    return this.get(this.parseUrl("balance"));
  }

  public createPending(body: any): Observable<any> {
    return this.post(this.parseUrl('transaction'), body);
  }

  public postPendings(
    page: number = 0,
    size: number = 8
  ): Observable<any> {
    return this.post(this.parseUrl("orders/current"), {
      page: page,
      size: size
    });
  }

  public updatePendings(
    ids: string[],
    state: 'COMPLETED' | 'CANCELED'
  ): Observable<any> {
    return this.post(this.parseUrl("orders/state"), {
      idList: ids,
      state: state
    });
  }

  public getOffers(): Observable<any> {
    return this.get(this.parseUrl("offers"));
  }

  public getSingleOffer(id: string): Observable<any> {
    return this.get(this.parseUrl("offer"), {
      id: id
    });
  }

  public postOffer(body: OfferBody): Observable<any> {
    return this.post(this.parseUrl(`offer`), body);
  }

  public deleteOffer(id: string | number): Observable<any> {
    return this.get(this.parseUrl(`offer/delete?id=${id}`));
  }

  public putOffer(body: OfferBody): Observable<any> {
    return this.post(this.parseUrl(`offer?id=${body.id}`), body);
  }

  public getTransactions(
    page: number = 0,
    size: number = 8
  ): Observable<any> {
    return this.get(this.parseUrl("orders"), {
      page: page,
      size: size
    });
  }

  public getUserInfo(): Observable<any> {
    return this.get(this.parseUrl("admin/info"));
  }

}
