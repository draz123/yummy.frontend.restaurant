import { BehaviorSubject } from "rxjs";
import { AppConfig } from "../../../app/app.config";
import { User } from "../../models/user";

declare let sessionStorage, fetch;

export class Initializer {
  private rootPage$: BehaviorSubject<string>;
  private userInfo$: BehaviorSubject<User>;
  private device$: BehaviorSubject<string>;

  constructor() {
    this.rootPage$ = new BehaviorSubject<string>(null);
    this.userInfo$ = new BehaviorSubject<User>(null);
    this.device$ = new BehaviorSubject<string>(null);
  }

  public initialize(): Promise<void> {
    return new Promise((resolve) => {
      this.setRootPage().then(() => resolve(), () => resolve());
    });
  }

  public getRootPage(): string {
    return this.rootPage$.getValue();
  }

  public getDevice(): string {
    return this.device$.getValue();
  }

  public getUserInfo(): User {
    return this.userInfo$.getValue();
  }

  private setRootPage(): Promise<void> {
    return new Promise((resolve) => {
      this.checkAuth().then(
        () => {
          this.getRestaurantInfo()
            .then((user: User) => {
              this.userInfo$.next(user);
              this.rootPage$.next("dashboard");
              resolve();
            })
            .catch(() => {
              this.rootPage$.next("dashboard");
              resolve();
            });
        },
        () => {
          this.rootPage$.next("welcome");
          resolve();
        }
      );
    });
  }

  private checkAuth(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!sessionStorage.__th || !sessionStorage.__mail) reject();
      let headers = new Headers();
      headers.set("Authorization", sessionStorage.__th);
      headers.set("Email", sessionStorage.__mail);

      this.fetchWrapper(
        `${AppConfig.rest.rootUrl}/user/bearer`,
        {
          headers: headers
        },
        5000
      ).then(
        (res: any) => (res.status === 403 ? reject() : resolve()),
        (err) => reject()
      );
    });
  }

  private getRestaurantInfo(): Promise<User> {
    let headers = new Headers();
    headers.set("Authorization", sessionStorage.__th);
    headers.set("Email", sessionStorage.__mail);

    return this.fetchWrapper(
      `${AppConfig.rest.rootUrl}/admin/info`,
      {
        headers: headers
      },
      5000
    )
      .then((res: any) => res.json())
      .then(({ code, email, message, ...rest }) => {
        return {
          ...rest,
          login: email
        };
      });
  }

  private fetchWrapper(url, options, timeout) {
    return new Promise((resolve, reject) => {
      fetch(url, options)
        .then(resolve)
        .catch(reject);

      if (timeout) {
        const e = new Error("Connection timed out");
        setTimeout(reject, timeout, e);
      }
    });
  }
}
