import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Pending } from "../../../core/models/pending";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { AppState } from "../../../core/app-state";
import * as fromPendingActions from "../../../core/actions/pending.actions";

@Component({
  selector: "pending-list",
  templateUrl: "pending-list.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PendingListComponent {
  public pendings$: Observable<Pending[]>;
  public isFetching$: Observable<boolean>;
  public page$: Observable<number>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.pendings$ = this.store.select((state) => state.pending.data);
    this.isFetching$ = this.store.select((state) => state.pending.isFetching);
    this.page$ = this.store.select((state) => state.pending.page);
  }

  public paginate(page: number): void {
    this.store.dispatch(new fromPendingActions.PaginatePendings(page))
  }
}
