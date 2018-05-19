import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Offer } from '../../../../core/models/offer';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../core/app-state';
import * as fromAction from "../../../../core/actions/offer.actions";
import * as fromModalAction from "../../../../core/actions/_modal.actions";
import { _ModalType } from '../../../../core/models/_modal';

@Component({
  selector: 'offers-item',
  templateUrl: 'offers-item.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OffersItemComponent {

  @Input() item: Offer;

  constructor(private store: Store<AppState>) {}

  openItem(id): void {
    this.store.dispatch(new fromModalAction.Show({
      mode: _ModalType.OFFER,
      meta: {
        id: id
      }
    }));
  }

  increaseCount(offer: Offer): void {
    this.store.dispatch(new fromAction.UpdateOffer({
      ...offer,
      count: offer.count + 1
    }));
  }

  decreaseCount(offer: Offer): void {
    this.store.dispatch(new fromAction.UpdateOffer({
      ...offer,
      count: offer.count - 1
    }));
  }

}
