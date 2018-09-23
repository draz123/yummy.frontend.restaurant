import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { StompHeaders } from "@stomp/stompjs";
import * as SockJS from "sockjs-client";
import * as Stomp from "@stomp/stompjs";
declare let sessionStorage: Storage;

@Injectable()
export class StompProvider {
  constructor() {}

  socketProvider() {
    return new SockJS("http://yummy-backend.herokuapp.com/yummy/api/restaurant-panel");
  }

  public connectSockets<T>(endpoint: string): Observable<T> {
    return Observable.create((observer) => {
      let socket = this.socketProvider();
      let stompClient = Stomp.over(socket);
      stompClient.connect(
        {
          "Authorization": sessionStorage.__th,
          "Email": sessionStorage.__mail
        },
        (frame) => {
          console.log("Connected: " + frame);
          stompClient.subscribe("/topic/restaurant/" + sessionStorage.__mail, (greeting) => {
            observer.next(greeting)
          });
        }
      );
    });
  }

  private getHeadersValues(): Observable<any[]> {
    return Observable.combineLatest(
      Observable.of(sessionStorage.__th),
      Observable.of(sessionStorage.__mail)
    );
  }

  private getHeaders(authToken, login): StompHeaders {
    let headers = new StompHeaders();
    headers.authToken = authToken;
    headers.login = login;

    return headers;
  }
}
