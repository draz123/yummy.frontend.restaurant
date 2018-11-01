import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS
} from "@angular/common/http";
import {
  ErrorHandler,
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  APP_INITIALIZER
} from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { Camera } from "@ionic-native/camera";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { IonicStorageModule, Storage } from "@ionic/storage";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { ReactiveFormsModule } from "@angular/forms";
import { YummyPlace } from "./app.component";

import {
  Settings,
  OfferProvider,
  LoginProvider,
  Api,
  Rest,
  User,
  StompProvider
} from "../core/providers/providers";
import { HttpInterceptorProvider } from "../core/providers/http-interceptor/http-interceptor";

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { OfferEffects } from "../core/effects/offer.effects";
import { reducers } from "../core/reducers/reducers";
import { LoginFormEffects } from "../core/effects/login-form.effects";
import { LoaderComponent } from "../components/loader/loader";
import { Initializer } from "../core/providers/initializer/initializer";
import { TakingsEffects } from "../core/effects/takings.effects";
import { PendingEffects } from "../core/effects/pending.effects";
import { PendingProvider } from "../core/providers/pending-provider/pending-provider";
import { PendingModalComponent } from "../components/pending-modal/pending-modal";
import { OfferModalComponent } from "../components/offer-modal/offer-modal";
import { TransactionModalComponent } from "../components/transaction-modal/transaction-modal";
import { PendingModalProductComponent } from "../components/pending-modal/pending-modal-product/pending-modal-product";
import { TransactionsProvider } from "../core/providers/transaction/transaction-provider";
import { TransactionEffects } from "../core/effects/transaction.effects";
import { OfferFormEffects } from "../core/effects/offer-form.effects";
import { UserPanelComponent } from "../components/user-panel/user-panel";
import { NgxPaginationModule } from "ngx-pagination";

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

export function provideSettings(storage: Storage) {
  return new Settings(storage, {});
}

export function initializer(initializeProvider: Initializer) {
  return () => initializeProvider.initialize();
}

@NgModule({
  declarations: [
    YummyPlace,
    LoaderComponent,
    PendingModalComponent,
    OfferModalComponent,
    TransactionModalComponent,
    PendingModalProductComponent,
    UserPanelComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    IonicModule.forRoot(YummyPlace),
    IonicStorageModule.forRoot(),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([
      LoginFormEffects,
      OfferEffects,
      TakingsEffects,
      PendingEffects,
      TransactionEffects,
      OfferFormEffects
    ]),
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    YummyPlace,
    PendingModalComponent,
    OfferModalComponent,
    TransactionModalComponent,
    PendingModalProductComponent,
    UserPanelComponent
  ],
  providers: [
    Api,
    Rest,
    User,
    OfferProvider,
    LoginProvider,
    PendingProvider,
    TransactionsProvider,
    StompProvider,
    Initializer,
    Camera,
    SplashScreen,
    StatusBar,
    {
      provide: Settings,
      useFactory: provideSettings,
      deps: [Storage]
    },
    {
      provide: ErrorHandler,
      useClass: IonicErrorHandler
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorProvider,
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      deps: [Initializer],
      multi: true
    }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
