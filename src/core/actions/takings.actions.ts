import { Action } from "@ngrx/store";

export const FETCH_TAKINGS = "[Takings] Fetch Takings";
export const FETCH_TAKINGS_SUCC = "[Takings] Fetch Takings Succ";
export const FETCH_TAKINGS_FAIL = "[Takings] Fetch Takings Fail";

export class FetchTakings {
  readonly type = FETCH_TAKINGS;
}

export class FetchTakingsSucc {
  readonly type = FETCH_TAKINGS_SUCC;
  constructor(public payload: any) {}
}

export class FetchTakingsFail {
  readonly type = FETCH_TAKINGS_FAIL;
}

export type TakingsActions = FetchTakings | FetchTakingsSucc | FetchTakingsFail;
