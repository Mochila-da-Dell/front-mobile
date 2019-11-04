import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component'
import { CategoriaService } from '../services/domain/categoria.service';
import { InstituicaoServiceProvider } from '../providers/instituicao-service/instituicao-service';

import {IonicStorageModule} from '@ionic/storage';

import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';
import { InstituicaoDaoProvider } from '../providers/instituicao-dao/instituicao-dao';
import { UsuariosServiceProvider } from '../providers/usuarios-service/usuarios-service';



@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: 'appChamada',
      storeName: 'instituicoes',
      driverOrder: ['indexeddb']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CategoriaService,
    InstituicaoServiceProvider,
    InstituicaoServiceProvider,
    InstituicaoDaoProvider,
    UsuariosServiceProvider
  ]
})
export class AppModule {}
