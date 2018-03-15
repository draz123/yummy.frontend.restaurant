import { Action } from "@ngrx/store";
import { _Route } from "../models/_route";

export const PUSH = '[_Route] Push';
export const POP = '[_Route] Pop';

export class Push implements Action {
  readonly type = PUSH;
  constructor(public payload: _Route) {};
}

export class Pop implements Action {
  readonly type = POP;
}

export type _RouteActions = Push | Pop;