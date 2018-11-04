import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import SockJS from "sockjs-client";
import Stomp, { Frame } from "@stomp/stompjs";
import { AppConfig } from "../../../app/app.config";

declare let sessionStorage: Storage;

@Injectable()
export class StompProvider {
  constructor() {}

  public connectSockets<T>(endpoint: string): Observable<T> {
    return Observable.create((observer) => {
      let socket = this.socketProvider();
      let stompClient = Stomp.over(socket);
      stompClient.connect(
        {
          Authorization: sessionStorage.__th,
          Email: sessionStorage.__mail
        },
        () =>
          stompClient.subscribe(
            "/topic/restaurant/" + sessionStorage.__mail,
            (data: Frame) => {
              console.log('ws data', JSON.parse(data.body));
              observer.next(JSON.parse(data.body));
            }
          )
      );
    });
  }

  private socketProvider() {
    return new SockJS(`${AppConfig.rest.rootUrl}/restaurant-panel`);
  }
}
