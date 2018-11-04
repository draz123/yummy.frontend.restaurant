export class Offer {
  constructor(offer?: Offer) {
    Object.assign(this, offer);
  }

  public id?: string | number = '';
  public name: string = '';
  public restaurantId?: string | number = '';
  public image: string = null;
  public description?: string = '';
  public price?: number = null;
  public calculatedPrice?: number = null;
  public discountMetric?: DiscountMetric = DiscountMetric.PERCENTAGE;
  public discount?: number = null;
  public count?: number = null;
  public receiveTimeStart?: number;
  public receiveTimeEnd?: number;
  public startDate?: string = "";
  public endDate?: string = "";
}

export enum DiscountMetric {
  PERCENTAGE = "PERCENTAGE",
  PRICE =  "PRICE"
}