import { of as observableOf, Observable, from as fromPromise } from "rxjs";

import { map, pairwise, mergeMap, pluck, tap, switchMap } from "rxjs/operators";
import { Component, ViewChild } from "@angular/core";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { TranslateService } from "@ngx-translate/core";
import {
  Config,
  Nav,
  Platform,
  ToastController,
  LoadingController,
  Toast,
  ModalController
} from "ionic-angular";

import { Settings, AnalyticsProvider } from "../core/providers/providers";
import { Store } from "@ngrx/store";
import { AppState } from "../core/app-state";
import { _Route } from "../core/models/_route";
import { _Toast } from "../core/models/_toast";
import { _Loader } from "../core/models/_loader";
import { Initializer } from "../core/providers/initializer/initializer";
import { _Modal, _ModalType } from "../core/models/_modal";
import { OfferModalComponent } from "../components/offer-modal/offer-modal";
import { PendingModalComponent } from "../components/pending-modal/pending-modal";
import { TransactionModalComponent } from "../components/transaction-modal/transaction-modal";

@Component({
  template: `
    <ion-menu [content]="content" [hidden]="!(isMenuEnabled$ | async)">
      <div class="placeholder"></div>
      <user-panel></user-panel>
      <div class="meta small">{{meta}}</div>
    </ion-menu>
    <ion-nav #content [root]="rootPage">
    </ion-nav>`
})
export class YummyPlace {
  @ViewChild(Nav)
  public nav: Nav;
  public toast: any;
  public loader: any;
  public modal: any;
  public isMenuEnabled$: Observable<boolean>;
  public rootPage: string;

  constructor(
    private translate: TranslateService,
    private platform: Platform,
    private settings: Settings,
    private config: Config,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    private store: Store<AppState>,
    private toastCtrl: ToastController,
    private loaderCtrl: LoadingController,
    private initializer: Initializer,
    private modalCtrl: ModalController,
    private analytics: AnalyticsProvider
  ) {
    this.rootPage = this.initializer.getRootPage();
    this.toast = null;
    this.loader = null;
    this.modal = null;
    platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.settings.load();
      this.subscribeLoader();
      this.subscribeRoute();
      this.subscribeToaster();
      this.subscribeModal();
      this.subscribeSwipe();
    });
    this.initTranslate();
  }

  private initTranslate() {
    this.translate.setDefaultLang("pl");
    this.translate.use("pl");

    this.translate.get(["BACK_BUTTON_TEXT"]).subscribe((values) => {
      this.config.set("ios", "backButtonText", values.BACK_BUTTON_TEXT);
    });
  }

  private subscribeRoute(): void {
    this.store
      .select((state) => state._route.data)
      .pipe(
        pairwise(),
        mergeMap(([prevRoutes, currRoutes]) => {
          return currRoutes.length === 1
            ? this.setRoot(currRoutes[currRoutes.length - 1])
            : currRoutes.length > prevRoutes.length
              ? this.pushPage(currRoutes[currRoutes.length - 1])
              : this.popPage();
        })
      )
      .subscribe();
  }

  private subscribeSwipe(): void {
    this.isMenuEnabled$ = this.store.select("_route").pipe(
      pluck("data"),
      map(
        (routes: _Route[]) =>
          routes.length === 1
            ? new _Route(this.initializer.getRootPage())
            : routes[routes.length - 1]
      ),
      tap((route: _Route) => this.analytics.trackPage(
        route.name
      )),
      map((route: _Route) => route.name !== "welcome")
    );
  }

  private subscribeLoader(): void {
    this.store
      .select((state) => state._loader.data)
      .pipe(
        pairwise(),
        mergeMap(([prevLoader, currLoader]) => {
          return this.handleUIDisplay(
            prevLoader,
            currLoader,
            () => this.showLoader(currLoader),
            () => this.hideLoader()
          );
        })
      )
      .subscribe();
  }

  private subscribeToaster(): void {
    this.store
      .select((state) => state._toast.data)
      .pipe(
        pairwise(),
        mergeMap(([prevToast, currToast]) => {
          return this.handleUIDisplay(
            prevToast,
            currToast,
            () => this.showToast(currToast),
            () => this.hideToast()
          );
        })
      )
      .subscribe();
  }

  private subscribeModal(): void {
    this.store
      .select((state) => state._modal.data)
      .pipe(
        pairwise(),
        mergeMap(([prevModal, currModal]) => {
          return this.handleUIDisplay(
            prevModal,
            currModal,
            () => this.showModal(currModal),
            () => this.hideModal()
          );
        })
      )
      .subscribe();
  }

  private handleUIDisplay(
    prevState: _Toast | _Loader | _Modal,
    currState: _Toast | _Loader | _Modal,
    shownFn: Function,
    hideFn: Function
  ): Observable<any> {
    let obs: Observable<any>;
    if (!prevState.isShown && !currState.isShown) {
      obs = observableOf(null);
    } else if (prevState.isShown && !currState.isShown) {
      obs = fromPromise(hideFn());
    } else if (!prevState.isShown && currState.isShown) {
      obs = fromPromise(shownFn());
    } else {
      obs = fromPromise(hideFn()).pipe(switchMap(() => fromPromise(shownFn())));
    }
    return obs;
  }

  private setRoot(route: _Route): Promise<any> {
    return this.nav.setRoot(route.name, route.params);
  }

  private pushPage(route: _Route): Promise<any> {
    return this.nav.push(route.name, route.params);
  }

  private popPage(): Promise<any> {
    return this.nav.pop();
  }

  private showToast(toast: _Toast): Promise<any> {
    this.toast = this.toastCtrl.create({
      message: toast.label,
      position: "bottom",
      duration: 4000
    });
    return this.toast.present();
  }

  private hideToast(): Promise<any> {
    return this.toast.dismiss();
  }

  private showLoader(loader: _Loader): Promise<any> {
    this.loader = this.loaderCtrl.create({
      content: loader.label
    });
    return this.loader.present();
  }

  private hideLoader(): Promise<any> {
    return this.loader.dismiss();
  }

  private selectModalMode(modalMode: _ModalType): any {
    switch (modalMode) {
      case _ModalType.OFFER:
      default:
        return OfferModalComponent;
      case _ModalType.PENDING:
        return PendingModalComponent;
      case _ModalType.TRANSACTION:
        return TransactionModalComponent;
    }
  }

  private showModal(modal: _Modal): Promise<any> {
    this.modal = this.modalCtrl.create(
      this.selectModalMode(modal.mode),
      modal.meta
    );
    return this.modal.present();
  }

  private hideModal(): Promise<any> {
    return this.modal.dismiss();
  }
}
