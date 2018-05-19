import { OrderSummary } from "../models/order-summary";
import { Action } from "@ngrx/store";

export const GET_ORDER_SUMMARY = '[Order Summary] Get Order Summary';

export class GetOrderSummary implements Action {
  readonly type = GET_ORDER_SUMMARY;
  constructor(public payload: any) {}
}

export type OrderSummaryActions = GetOrderSummary;