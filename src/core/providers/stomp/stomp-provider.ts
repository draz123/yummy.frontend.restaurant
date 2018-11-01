import {
  Observable
} from "rxjs";
import { Injectable } from "@angular/core";
import { StompService } from "@stomp/ng2-stompjs";
import { map } from "rxjs/operators";
import { Message } from "@stomp/stompjs";

declare let sessionStorage: Storage;

@Injectable()
export class StompProvider {
  constructor(private stompService: StompService) {}

  public connectSockets<T>(endpoint: string): Observable<T> {
    return Observable.create((observer) => {
      let sub = this.stompService.subscribe(endpoint, {
        login: "guest",
        passcode: "guest"
      });

      sub
        .pipe(map((message: Message) => message.body))
        .subscribe((msg_body: string) => {
          //console.log(`Received: ${msg_body}`);
          observer.next(msg_body);
        });
    });
  }
}
