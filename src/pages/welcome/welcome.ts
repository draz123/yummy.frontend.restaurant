import { Component } from "@angular/core";
import { IonicPage, NavController } from "ionic-angular";
import * as fromFormAction from "../../core/actions/login-form.actions";
import { Store } from "@ngrx/store";
import { AppState } from "../../core/app-state";

@IonicPage({
  name: "welcome"
})
@Component({
  selector: "page-welcome",
  templateUrl: "welcome.html"
})
export class WelcomePage {
  constructor(public navCtrl: NavController, private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(
      new fromFormAction.UpdateForm({
        data: {
          login: "user2@restaurant.com",
          password: "user2"
        }
      })
    );
    this.store.dispatch(
      new fromFormAction.SubmitForm({
        data: {
          login: "user2@restaurant.com",
          password: "user2"
        }
      })
    );
  }

  login() {
    this.navCtrl.push("LoginPage");
  }

  signup() {
    this.navCtrl.push("SignupPage");
  }
}
