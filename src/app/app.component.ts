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

import { Settings } from "../core/providers/providers";
import { Store } from "@ngrx/store";
import { AppState } from "../core/app-state";
import { _Route } from "../core/models/_route";
import { _Toast } from "../core/models/_toast";
import { _Loader } from "../core/models/_loader";
import { Observable } from "rxjs";
import { fromPromise } from "rxjs/observable/fromPromise";
import { Initializer } from "../core/providers/initializer/initializer";
import { _Modal, _ModalType } from "../core/models/_modal";
import { OfferModalComponent } from "../components/offer-modal/offer-modal";
import { PendingModalComponent } from "../components/pending-modal/pending-modal";
import { TransactionModalComponent } from "../components/transaction-modal/transaction-modal";

@Component({
  template: `
    <ion-menu [content]="content">
      <div class="placeholder"></div>
      <user-panel></user-panel>
      <div class="meta">{{meta}}</div>
    </ion-menu>
    <ion-nav #content [root]="rootPage">
    </ion-nav>`
})
export class YummyPlace {
  @ViewChild(Nav) public nav: Nav;
  public toast: any;
  public loader: any;
  public modal: any;
  private rootPage: string;
  private device: string;
  private meta: string = `Delluptat ligenimus es velendis magnisqui odis eostion secatusa nis ad etures ate ni untis exerio in corest, aut aceped qui qui cus, sum es apellab orehenimpor ad mo ium quam, omni nus velique rem. Ut molutectus. Gitiis que voluptatur? Anis nobistrunt essi- tate nobisim quam, sunt fugiatiur as dolo- resciis am vellaborae o cie ndissim iliquisi reium aute optatiu ribuscitates sa vendend`;

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
    private modalCtrl: ModalController
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
    });
    this.initTranslate();
  }

  initTranslate() {
    this.translate.setDefaultLang("pl");
    this.translate.use("pl");

    this.translate.get(["BACK_BUTTON_TEXT"]).subscribe((values) => {
      this.config.set("ios", "backButtonText", values.BACK_BUTTON_TEXT);
    });
  }

  subscribeRoute(): void {
    this.store
      .select((state) => state._route.data)
      .pairwise()
      .mergeMap(([prevRoutes, currRoutes]) => {
        return currRoutes.length === 1
          ? this.setRoot(currRoutes[currRoutes.length - 1])
          : currRoutes.length > prevRoutes.length
            ? this.pushPage(currRoutes[currRoutes.length - 1])
            : this.popPage();
      })
      .subscribe();
  }

  subscribeLoader(): void {
    this.store
      .select((state) => state._loader.data)
      .pairwise()
      .mergeMap(([prevLoader, currLoader]) => {
        return this.handleUIDisplay(
          prevLoader,
          currLoader,
          () => this.showLoader(currLoader),
          () => this.hideLoader()
        );
      })
      .subscribe();
  }

  subscribeToaster(): void {
    this.store
      .select((state) => state._toast.data)
      .pairwise()
      .mergeMap(([prevToast, currToast]) => {
        return this.handleUIDisplay(
          prevToast,
          currToast,
          () => this.showToast(currToast),
          () => this.hideToast()
        );
      })
      .subscribe();
  }

  subscribeModal(): void {
    this.store
      .select((state) => state._modal.data)
      .pairwise()
      .mergeMap(([prevModal, currModal]) => {
        return this.handleUIDisplay(
          prevModal,
          currModal,
          () => this.showModal(currModal),
          () => this.hideModal()
        );
      })
      .subscribe();
  }

  handleUIDisplay(
    prevState: _Toast | _Loader | _Modal,
    currState: _Toast | _Loader | _Modal,
    shownFn: Function,
    hideFn: Function
  ): Observable<any> {
    let obs: Observable<any>;
    if (!prevState.isShown && !currState.isShown) {
      obs = Observable.of(null);
    } else if (prevState.isShown && !currState.isShown) {
      obs = fromPromise(hideFn());
    } else if (!prevState.isShown && currState.isShown) {
      obs = fromPromise(shownFn());
    } else {
      obs = fromPromise(hideFn()).switchMap(() => fromPromise(shownFn()));
    }
    return obs;
  }

  setRoot(route: _Route): Promise<any> {
    return this.nav.setRoot(route.name, route.params);
  }

  pushPage(route: _Route): Promise<any> {
    return this.nav.push(route.name, route.params);
  }

  popPage(): Promise<any> {
    return this.nav.pop();
  }

  showToast(toast: _Toast): Promise<any> {
    this.toast = this.toastCtrl.create({
      message: toast.label,
      position: "bottom",
      duration: 4000
    });
    return this.toast.present();
  }

  hideToast(): Promise<any> {
    return this.toast.dismiss();
  }

  showLoader(loader: _Loader): Promise<any> {
    this.loader = this.loaderCtrl.create({
      content: loader.label
    });
    return this.loader.present();
  }

  hideLoader(): Promise<any> {
    return this.loader.dismiss();
  }

  selectModalMode(modalMode: _ModalType): any {
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

  showModal(modal: _Modal): Promise<any> {
    this.modal = this.modalCtrl.create(
      this.selectModalMode(modal.mode),
      modal.meta
    );
    return this.modal.present();
  }

  hideModal(): Promise<any> {
    return this.modal.dismiss();
  }
}
