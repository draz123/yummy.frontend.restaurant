import { Component } from '@angular/core';
import { User } from '../../core/models/user';
import { Store } from '@ngrx/store';
import { AppState } from '../../core/app-state';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'user-panel',
  templateUrl: 'user-panel.html'
})
export class UserPanelComponent {

  private user$: Observable<User>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.user$ = this.store.select((state) => state.user.data);
  }

}
