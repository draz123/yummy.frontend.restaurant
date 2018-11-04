import { Transaction } from "./transaction";

export class Pending extends Transaction {
  constructor(
    pending: Pending
  ) {
    super(pending);
    Object.assign(this, pending);
  }
}

export interface PendingSingleItem {
  count: number,
  id: number,
  name: string,
  price: string,
  discount: number,
  image: string
}