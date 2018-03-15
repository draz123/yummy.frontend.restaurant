import { Injectable } from "@angular/core";
import { Api } from "../api/api";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs/Observable";
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

  getOffers(): Observable<any> {
    return this.get(this.parseUrl("offers"));
  }

  getSingleOffer(id: string): Observable<any> {
    return this.get(this.parseUrl("offer"), {
      id: id
    });
  }

  postOffer(body: OfferBody): Observable<any> {
    return this.post(this.parseUrl("offer"), body);
  }

  putOffer(body: OfferBody): Observable<any> {
    return this.put(this.parseUrl("offer"), body);
  }
}
