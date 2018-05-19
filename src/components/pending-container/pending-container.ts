import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Observable } from "rxjs";
import { Pending } from "../../core/models/pending";
import { Store } from "@ngrx/store";
import { AppState } from "../../core/app-state";
import * as fromActions from "../../core/actions/pending.actions";
import { Rest } from "../../core/providers/rest/rest";
import { PendingProvider } from "../../core/providers/pending-provider/pending-provider";

@Component({
  selector: "pending-container",
  templateUrl: "pending-container.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PendingContainerComponent {
  pendings$: Observable<Pending[]>;

  constructor(private store: Store<AppState>, private prov: PendingProvider) {
    this.pendings$ = this.store.select((state) => state.pending.data);
  }

  create(): void {
    this.prov.createPendings(1)
      .subscribe(() => this.store.dispatch(new fromActions.FetchPendings({})))
  }

  complete(): void {
    this.pendings$
      .take(1)
      .map((pendings: Pending[]) =>
        pendings
          .filter((pending: Pending) => pending.isMarked)
          .map((pending: Pending) => pending.id)
      )
      .subscribe((ids: string[]) => {
        if (ids.length !== 0) {
          this.store.dispatch(new fromActions.CompletePendings(ids));
        }
      });
  }

  cancel(): void {
    this.pendings$
      .take(1)
      .map((pendings: Pending[]) =>
        pendings
          .filter((pending: Pending) => pending.isMarked)
          .map((pending: Pending) => pending.id)
      )
      .subscribe((ids: string[]) => {
        if (ids.length !== 0) {
          this.store.dispatch(new fromActions.CancelPendings(ids));
        }
      });
  }
}
