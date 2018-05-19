import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Store } from '@ngrx/store';
import { AppState } from '../../core/app-state';

@Component({
  selector: 'transaction-modal',
  templateUrl: 'transaction-modal.html'
})
export class TransactionModalComponent {

  constructor(
    private navParams: NavParams,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    console.log(this.navParams.data);
  }

}
