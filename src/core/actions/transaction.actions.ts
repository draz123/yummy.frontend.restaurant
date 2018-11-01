import { Action } from "@ngrx/store";

export const FETCH_TRANSACTIONS = "[Transaction] Fetch Transactions";
export const FETCH_TRANSACTIONS_SUCC = "[Transaction] Fetch Transactions Succ";
export const FETCH_TRANSACTIONS_FAIL = "[Transaction] Fetch Transactions Fail";
export const PAGINATE_TRANSACTIONS = "[Transaction] Paginate Transactions";

export class FetchTransactions implements Action {
  readonly type = FETCH_TRANSACTIONS;
  constructor(public payload: any) {}
}

export class FetchTransactionsSucc implements Action {
  readonly type = FETCH_TRANSACTIONS_SUCC;
  constructor(public payload: any) {}
}

export class FetchTransactionsFail implements Action {
  readonly type = FETCH_TRANSACTIONS_FAIL;
}

export class PaginateTransactions implements Action {
  readonly type = PAGINATE_TRANSACTIONS;
  constructor(public payload: number) {}
}

export type TransactionActions =
  | FetchTransactions
  | FetchTransactionsSucc
  | FetchTransactionsFail
  | PaginateTransactions;