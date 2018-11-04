import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../core/app-state';
import * as fromPendingAction from "../../core/actions/pending.actions";
import * as fromModalAction from "../../core/actions/_modal.actions"
import { _ModalType } from '../../core/models/_modal';

@Component({
  selector: 'transaction-item',
  templateUrl: 'transaction-item.html'
})
export class TransactionItemComponent {
  @Input() 
  public item: any;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {}

  public openItem(id: string): void {
    this.store.dispatch(new fromModalAction.Show({
      mode: _ModalType.PENDING,
      meta: {
        id: id
      }
    }));
  }

  public markItem(id: string): void {
    this.store.dispatch(new fromPendingAction.MarkPending({ id: id }));
  }

}
