
import {map, take, pluck, reduce} from 'rxjs/operators';
import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Store } from '@ngrx/store';
import { AppState } from '../../core/app-state';
import { Pending, PendingSingleItem } from '../../core/models/pending';
import { Observable } from 'rxjs';
import * as fromActions from '../../core/actions/pending.actions';
import * as fromModalActions from '../../core/actions/_modal.actions';

@Component({
  selector: 'pending-modal',
  templateUrl: 'pending-modal.html'
})
export class PendingModalComponent {
  public pending$: Observable<Pending>;
  public allCount$: Observable<number>;

  constructor(
    private navParams: NavParams,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    if (this.navParams.get('id')) this.connectPending(this.navParams.get('id'));
  }

  public connectPending(id: string): void {
    this.pending$ = this.store.select((state) => state.pending.data).pipe(
      map((pendings: Pending[]) => pendings.find(
        (singlePending: Pending) => singlePending.id === id
      )));
    this.allCount$ = this.pending$.pipe(
      pluck('orderItemList'),
      map((products: PendingSingleItem[]) => products.reduce((curr: number, product: PendingSingleItem) => {
        return curr + product.count;
      }, 0))
    );
  }

  public complete(): void {
    this.pending$.pipe(
      take(1))
      .subscribe((pending: Pending) => {
        this.close();
        this.store.dispatch(new fromActions.CompletePendings([pending.id]))
      });
  }

  public cancel(): void {
    this.pending$.pipe(
      take(1))
      .subscribe((pending: Pending) => {
        this.close();
        this.store.dispatch(new fromActions.CancelPendings([pending.id]))
      });
  }

  close(): void {
    this.store.dispatch(new fromModalActions.Hide);
  }

}
