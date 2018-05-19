import { Action } from "@ngrx/store";

export const FETCH_PENDINGS = "[Pending] Fetch Pendings";
export const FETCH_PENDINGS_SUCC = "[Pending] Fetch Pendings Succ";
export const FETCH_PENDINGS_FAIL = "[Pending] Fetch Pendings Fail";
export const MARK_PENDING = "[Pending] Mark Pending";
export const COMPLETE_PENDINGS = "[Pending] Complete Pendings";
export const COMPLETE_PENDINGS_SUCC = "[Pending] Complete Pendings Succ";
export const COMPLETE_PENDINGS_FAIL = "[Pending] Complete Pendings Fail";
export const CANCEL_PENDINGS = "[Pending] Cancel Pendings";
export const CANCEL_PENDINGS_SUCC = "[Pending] Cancel Pendings Succ";
export const CANCEL_PENDINGS_FAIL = "[Pending] Cancel Pendings Fail";

export class FetchPendings implements Action {
  readonly type = FETCH_PENDINGS;
  constructor(public payload: any) {}
}

export class FetchPendingsSucc implements Action {
  readonly type = FETCH_PENDINGS_SUCC;
  constructor(public payload: any) {}
}

export class FetchPendingsFail implements Action {
  readonly type = FETCH_PENDINGS_FAIL;
}

export class MarkPending implements Action {
  readonly type = MARK_PENDING;
  constructor(public payload: any) {}
}

export class CompletePendings implements Action {
  readonly type = COMPLETE_PENDINGS;
  constructor(public payload: string[]) {}
}

export class CompletePendingsSucc implements Action {
  readonly type = COMPLETE_PENDINGS_SUCC;
  constructor(public payload: string[]) {}
}

export class CompletePendingsFail implements Action {
  readonly type = COMPLETE_PENDINGS_FAIL;
}

export class CancelPendings implements Action {
  readonly type = CANCEL_PENDINGS;
  constructor(public payload: string[]) {}
}

export class CancelPendingsSucc implements Action {
  readonly type = CANCEL_PENDINGS_SUCC;
  constructor(public payload: string[]) {}
}

export class CancelPendingsFail implements Action {
  readonly type = CANCEL_PENDINGS_FAIL;
}

export type PendingActions =
  | FetchPendings
  | FetchPendingsSucc
  | FetchPendingsFail
  | MarkPending
  | CompletePendings
  | CompletePendingsSucc
  | CompletePendingsFail
  | CancelPendings
  | CancelPendingsSucc
  | CancelPendingsFail;
