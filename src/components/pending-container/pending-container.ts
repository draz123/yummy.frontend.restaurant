import { map, take, tap } from "rxjs/operators";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Observable } from "rxjs";
import { Pending } from "../../core/models/pending";
import { Store } from "@ngrx/store";
import { AppState } from "../../core/app-state";
import * as fromActions from "../../core/actions/pending.actions";
import { Rest } from "../../core/providers/rest/rest";
import { PendingProvider } from "../../core/providers/pending-provider/pending-provider";
import format from 'date-fns/format'

@Component({
  selector: "pending-container",
  templateUrl: "pending-container.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PendingContainerComponent {
  public pendings$: Observable<Pending[]>;
  public pendingsMarked$: Observable<boolean>;
  public date: string = format(new Date(), 'DD-MM-YYYY');

  constructor(private store: Store<AppState>, private prov: PendingProvider) {
    this.pendings$ = this.store.select((state) => state.pending.data);
    this.pendingsMarked$ = this.pendings$.pipe(
      map((pendings: Pending[]) =>
        pendings.filter((pending: Pending) => pending.isMarked)
      ),
      map((marked: Pending[]) => marked.length > 0)
    );
  }

  public complete(): void {
    this.pendings$
      .pipe(
        take(1),
        map((pendings: Pending[]) =>
          pendings
            .filter((pending: Pending) => pending.isMarked)
            .map((pending: Pending) => pending.id)
        )
      )
      .subscribe((ids: string[]) => {
        if (ids.length !== 0) {
          this.store.dispatch(new fromActions.CompletePendings(ids));
        }
      });
  }

  public cancel(): void {
    this.pendings$
      .pipe(
        take(1),
        map((pendings: Pending[]) =>
          pendings
            .filter((pending: Pending) => pending.isMarked)
            .map((pending: Pending) => pending.id)
        )
      )
      .subscribe((ids: string[]) => {
        if (ids.length !== 0) {
          this.store.dispatch(new fromActions.CancelPendings(ids));
        }
      });
  }
}
