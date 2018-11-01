import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Offer } from '../../../core/models/offer';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../../core/app-state';
import * as fromOfferActions from "../../../core/actions/offer.actions";

@Component({
  selector: 'offers-list',
  templateUrl: 'offers-list.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OffersListComponent {
  public page$: Observable<number>;
  public offers$: Observable<Offer[]>;
  public isFetching$: Observable<boolean>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.page$ = this.store.select((state) => state.offer.page);
    this.offers$ = this.store.select((state) => state.offer.data);
    this.isFetching$ = this.store.select((state) => state.offer.isFetching);
  }

  public paginate(page: number): void {
    this.store.dispatch(new fromOfferActions.PaginateOffers(page))
  }

}
