import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Offer } from '../../../core/models/offer';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../../core/app-state';

@Component({
  selector: 'offers-list',
  templateUrl: 'offers-list.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OffersListComponent {

  offers: Observable<Offer[]>;
  isFetching: Observable<boolean>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.offers = this.store.select((state) => state.offer.data);
    this.isFetching = this.store.select((state) => state.offer.isFetching);
  }

}
