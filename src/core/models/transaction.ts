export class Transaction {
  constructor(
    transaction
  ) {
    Object.assign(this, transaction);
  }

  public id: string;
  public name: string;
  public status: string;
  public orderDate: string;
  public price: number;
  //public isLoaded?: boolean;
}