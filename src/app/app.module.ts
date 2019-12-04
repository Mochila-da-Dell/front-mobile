import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component'
import { CategoriaService } from '../services/domain/categoria.service';
import { InstituicaoServiceProvider } from '../providers/instituicao-service/instituicao-service';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuth } from '@angular/fire/auth';
import { SuperTabsModule } from 'ionic2-super-tabs';


import {IonicStorageModule} from '@ionic/storage';

import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';
import { UsuariosServiceProvider } from '../providers/usuarios-service/usuarios-service';
import { ErrorIntercptorProvider } from '../interceptors/error-interceptor';
import { StorageServiceProvider } from '../providers/storage-service/storage-service';
import { InstituicaoDaoProvider } from '../providers/instituicao-dao/instituicao-dao';
import { CursoServiceProvider } from '../providers/curso-service/curso-service';
import { CursoDaoProvider } from '../providers/curso-dao/curso-dao';
import { TurmaDaoProvider } from '../providers/turma-dao/turma-dao';
import { TurmaServiceProvider } from '../providers/turma-service/turma-service';
import { MateriaServiceProvider } from '../providers/materia-service/materia-service';
import { MateriaDaoProvider } from '../providers/materia-dao/materia-dao';
import { ProfessordaoProvider } from '../providers/professordao/professordao';
import { AlunoDaoProvider } from '../providers/aluno-dao/aluno-dao';
import { TokenChamadaServiceProvider } from '../providers/token-chamada-service/token-chamada-service';
import { TokenChamadaDaoProvider } from '../providers/token-chamada-dao/token-chamada-dao';
import { SelectSearchableModule } from 'ionic-select-searchable';



@NgModule({
  declarations: [
    MyApp,
    
    
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    SuperTabsModule.forRoot(),
    IonicStorageModule.forRoot({
      name: 'appChamada',
      storeName: 'mydb',
      driverOrder: ['indexeddb']
    }),
    SelectSearchableModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CategoriaService,
    InstituicaoServiceProvider,
    InstituicaoServiceProvider,
    InstituicaoDaoProvider,
    UsuariosServiceProvider,
    AngularFireAuth,
    ErrorIntercptorProvider,
    StorageServiceProvider,
    CursoServiceProvider,
    CursoDaoProvider,
    TurmaDaoProvider,
    TurmaServiceProvider,
    MateriaServiceProvider,
    MateriaDaoProvider,
    ProfessordaoProvider,
    AlunoDaoProvider,
    TokenChamadaServiceProvider,
    TokenChamadaDaoProvider
  ]
})
export class AppModule {}
