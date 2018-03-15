import { Component } from "@angular/core";

import { Observable } from "rxjs";
import { Offer } from "../../core/models/offer";
import { AppState } from "../../core/app-state";
import { Store } from "@ngrx/store";
import { OffersFrom } from "../../core/actions/offer.actions";

@Component({
  selector: "offers-container",
  templateUrl: "offers-container.html"
})
export class OffersContainerComponent {
  offers$: Observable<Offer[]>;

  constructor(private store: Store<AppState>) {
    this.store.dispatch(new OffersFrom());
    this.offers$ = this.store
      .select((state) => state.offer.data);
  }
}
