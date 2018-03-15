import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateService } from '@ngx-translate/core';
import { Config, Nav, Platform, ToastController, LoadingController, Toast } from 'ionic-angular';

import { Settings } from '../core/providers/providers';
import { Store } from '@ngrx/store';
import { AppState } from '../core/app-state';
import { _Route } from '../core/models/_route';
import { _Toast } from '../core/models/_toast';
import { _Loader } from '../core/models/_loader';
import { Observable, pipe } from 'rxjs';
import { fromPromise } from 'rxjs/observable/fromPromise';

@Component({
  template: `
    <ion-menu [content]="content">
    </ion-menu>
    <ion-nav #content [root]="rootPage">
    </ion-nav>`
})
export class YummyPlace {
  rootPage = 'dashboard';

  @ViewChild(Nav) nav: Nav;
  toast: any;
  loader: any;

  constructor(
    private translate: TranslateService,
    private platform: Platform,
    private settings: Settings,
    private config: Config,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    private store: Store<AppState>,
    private toastCtrl: ToastController,
    private loaderCtrl: LoadingController
  ) {
    this.toast = null;
    this.loader = null;
    platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.settings.load();
      this.subscribeLoader();
      this.subscribeRoute();
      this.subscribeToaster();
    });
    this.initTranslate();
  }

  initTranslate() {
    this.translate.setDefaultLang('pl');
    this.translate.use('pl');

    this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
      this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    });
  }

  subscribeRoute(): void {
    this.store.select((state) => state._route.data)
      .pairwise()
      .mergeMap(([prevRoutes, currRoutes]) => {
        return (currRoutes.length > prevRoutes.length)
          ? this.pushPage(currRoutes[currRoutes.length - 1])
          : this.popPage();
      })
      .subscribe();
  }

  subscribeLoader(): void {
    this.store.select((state) => state._loader.data)
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
    this.store.select((state) => state._toast.data)
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

  handleUIDisplay(
    prevState: _Toast | _Loader, 
    currState: _Toast | _Loader,
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
      obs = fromPromise(hideFn())
        .switchMap(() => fromPromise(shownFn()));
    }
    return obs;
  }

  openPage(page): Promise<any> {
    return this.nav.setRoot(page.component);
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
      position: 'bottom'
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

}
