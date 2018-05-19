export class OrderSummary {
  constructor(
    orderSummary?
  ) {
    Object.assign(this, orderSummary);
  }

  public acceptedOrders: number;
  public canceledOrders: number;
  public completedOrders: number;
  public missedOrders: number;
}