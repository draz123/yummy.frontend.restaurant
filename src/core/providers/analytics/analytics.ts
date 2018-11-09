import { Injectable } from "@angular/core";

declare let window: any;

@Injectable()
export class AnalyticsProvider {
  public trackPage(page: string): void {
    (<any>window).ga("send", "pageview", page);
  }

  public trackEvent(
    category: string,
    label: string,
    action?: string,
    value?: number
  ): void {
    (<any>window).ga("send", "event", {
      eventCategory: category,
      eventLabel: label,
      eventAction: action,
      eventValue: value
    });
  }
}
