import { NgModule, APP_INITIALIZER, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ImagePicker } from '@ionic-native/image-picker/ngx';

import { ImageResizer } from '@ionic-native/image-resizer/ngx';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { init } from './init';
import { IonicStorageModule } from '@ionic/storage';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { GoogleMaps } from '@ionic-native/google-maps';

import localeTr from '@angular/common/locales/tr';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeTr);

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: LOCALE_ID, useValue: 'tr-TR' },
    ImagePicker,
    ImageResizer,
    AuthService,
    QRScanner,
    GoogleMaps,
    {
      provide: APP_INITIALIZER,
      useFactory: init,
      deps: [AuthService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
