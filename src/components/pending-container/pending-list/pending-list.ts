import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Pending } from "../../../core/models/pending";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { AppState } from "../../../core/app-state";

@Component({
  selector: "pending-list",
  templateUrl: "pending-list.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PendingListComponent {
  pendings$: Observable<Pending[]>;
  isFetching$: Observable<boolean>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.pendings$ = this.store.select((state) => state.pending.data);
    this.isFetching$ = this.store.select((state) => state.pending.isFetching);
  }
}
