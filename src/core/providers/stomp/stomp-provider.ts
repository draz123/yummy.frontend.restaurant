import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import SockJS from "sockjs-client";
import Stomp from "@stomp/stompjs";

declare let sessionStorage: Storage;

@Injectable()
export class StompProvider {
  constructor() {}

  socketProvider() {
    return new SockJS(
      "https://yummy-backend.herokuapp.com/yummy/api/restaurant-panel"
    );
  }

  public connectSockets<T>(endpoint: string): Observable<T> {
    return Observable.create((observer) => {
      let socket = this.socketProvider();
      let stompClient = Stomp.over(socket);
      stompClient.connect(
        {
          Authorization: sessionStorage.__th,
          Email: sessionStorage.__mail
        },
        (frame) => {
          console.log("Connected: " + frame);
          stompClient.subscribe(
            "/topic/restaurant/" + sessionStorage.__mail,
            (greeting) => {
              console.log("bump from socket", greeting);
              observer.next(greeting);
            }
          );
        }
      );
    });
  }
}
