import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Camera } from '@ionic-native/camera';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { YummyPlace } from './app.component';

import { Settings, OfferProvider, LoginProvider, Api, Rest, User } from '../core/providers/providers';
import { HttpInterceptorProvider } from '../core/providers/http-interceptor/http-interceptor';

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { OfferEffects } from '../core/effects/offer.effects';
import { reducers } from '../core/reducers/reducers';
import { LoginFormEffects } from '../core/effects/login-form.effects';
import { LoaderComponent } from '../components/loader/loader';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function provideSettings(storage: Storage) {
  return new Settings(storage, {});
}

@NgModule({
  declarations: [
    YummyPlace,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    IonicModule.forRoot(YummyPlace),
    IonicStorageModule.forRoot(),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([
      LoginFormEffects,
      OfferEffects
    ]),
    ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    YummyPlace
  ],
  providers: [
    Api,
    Rest,
    User,
    OfferProvider,
    LoginProvider,
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
    }
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
