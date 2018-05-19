import { Platform } from "ionic-angular";
import { Settings } from "../providers";
import { BehaviorSubject } from "rxjs";
import { AppConfig } from "../../../app/app.config";

declare let window, sessionStorage, fetch;

export class Initializer {
  private rootPage$: BehaviorSubject<string>;
  private device$: BehaviorSubject<string>;

  constructor() {
    this.rootPage$ = new BehaviorSubject<string>(null);
    this.device$ = new BehaviorSubject<string>(null);
  }

  getRootPage(): string {
    return this.rootPage$.getValue();
  }

  getDevice(): string {
    return this.device$.getValue();
  }

  initialize(): Promise<void> {
    return new Promise((resolve) => {
      //console.log((window.cordova) ? "mobile/tab" : "browser");
      this.setRootPage().then(() => resolve(), () => resolve());
    });
  }

  setRootPage(): Promise<void> {
    return new Promise((resolve) => {
      this.checkAuth().then(
        () => {
          this.rootPage$.next("dashboard");
          resolve();
        },
        () => {
          this.rootPage$.next("welcome");
          resolve();
        }
      );
    });
  }

  checkAuth(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!sessionStorage.__th || !sessionStorage.__mail) reject();
      let headers = new Headers();
      headers.set("Authorization", sessionStorage.__th);
      headers.set("Email", sessionStorage.__mail);

      this.fetchWrapper(`${AppConfig.rest.rootUrl}/balance`, {
        headers: headers
      }, 5000).then(
        (res: any) => (res.status === 403 ? reject() : resolve()),
        (err) => reject()
      );
    });
  }

  fetchWrapper(url, options, timeout) {
    return new Promise((resolve, reject) => {
      fetch(url, options).then(resolve).catch(reject);

      if (timeout) {
        const e = new Error("Connection timed out");
        setTimeout(reject, timeout, e);
      }
    });
  }
}
