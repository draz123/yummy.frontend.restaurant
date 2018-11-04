import { Component } from "@angular/core";

import { Observable } from "rxjs";
import { Offer } from "../../core/models/offer";
import { AppState } from "../../core/app-state";
import * as fromModalAction from '../../core/actions/_modal.actions';
import { Store } from "@ngrx/store";
import { _ModalType } from "../../core/models/_modal";
import { format } from "date-fns";

@Component({
  selector: "offers-container",
  templateUrl: "offers-container.html"
})
export class OffersContainerComponent {
  public offers$: Observable<Offer[]>;
  public date: string = format(new Date(), 'DD-MM-YYYY');

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.offers$ = this.store.select((state) => state.offer.data);
  }

  public add(): void {
    this.store.dispatch(new fromModalAction.Show({
      mode: _ModalType.OFFER,
      meta: {
        id: null
      }
    }));
  }
}
