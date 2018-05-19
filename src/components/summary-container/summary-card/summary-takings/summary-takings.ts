import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Takings } from '../../../../core/models/takings';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../core/app-state';

@Component({
  selector: 'summary-takings',
  templateUrl: 'summary-takings.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SummaryTakingsComponent {

  takings$: Observable<Takings[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.takings$ = this.store.select(state => state.takings.data);
  }

}
