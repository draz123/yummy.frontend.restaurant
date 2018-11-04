export class Transaction {
  constructor(
    transaction: Transaction
  ) {
    Object.assign(this, transaction);
    this.isMarked = false;
  }

  public id: string;
  public name: string;
  public orderTime: string;
  public receiveTime: string;
  public paymentCode: string;
  public price: number;
  public isMarked?: boolean;
  public state?: 'COMPLETED' | 'CANCELED';
  public orderItemList?: PendingSingleItem[];

  public parsedOrderTime?: string;
  public parsedOrderDate?: string;
  public parsedReceiveTime?: string;
  public parsedReceiveDate?: string;
}

export interface PendingSingleItem {
  count: number,
  id: number,
  name: string,
  price: string,
  discount: number,
  image: string
}