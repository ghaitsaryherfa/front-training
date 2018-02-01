import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { QuesionerPage } from '../pages/quesioner/quesioner';
import { PenyakitPage } from '../pages/penyakit/penyakit';
import { PenyakitDetailsPage } from "../pages/penyakit/penyakit-detail";
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { HasilPage } from "../pages/quesioner/hasil";

import { QuesionerService } from "../services/quesioner.service";
import { UrlService } from "../services/url.service";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    QuesionerPage,
    PenyakitPage,
    PenyakitDetailsPage,
    HomePage,
    TabsPage,
    HasilPage
  ],
  imports: [
    BrowserModule,HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    QuesionerPage,
    PenyakitPage,
    PenyakitDetailsPage,
    HomePage,
    TabsPage,
    HasilPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    QuesionerService,
    UrlService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
