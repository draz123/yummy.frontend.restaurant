export class Pending {
  constructor(
    pending
  ) {
    Object.assign(this, pending);
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
  public orderItemList?: PendingSingleItem[] ;
}

export interface PendingSingleItem {
  count: number,
  id: number,
  name: string,
  price: string,
  discount: number,
  image: string
}