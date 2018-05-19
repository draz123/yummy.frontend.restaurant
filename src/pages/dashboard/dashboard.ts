import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import * as fromTakingsActions from "../../core/actions/takings.actions";
import * as fromPendingActions from "../../core/actions/pending.actions";
import * as fromOfferActions from "../../core/actions/offer.actions";
import * as fromTransactionActions from "../../core/actions/transaction.actions";
import { Store } from '@ngrx/store';
import { AppState } from '../../core/app-state';


@IonicPage({
  name: 'dashboard'
})
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  constructor(
    private store: Store<AppState>
  ) {
  }

  ionViewDidLoad() {
    this.store.dispatch(new fromTakingsActions.FetchTakings());
    this.store.dispatch(new fromOfferActions.FetchOffers());
    this.store.dispatch(new fromPendingActions.FetchPendings(null));
    this.store.dispatch(new fromTransactionActions.FetchTransactions(null));
  }

}
