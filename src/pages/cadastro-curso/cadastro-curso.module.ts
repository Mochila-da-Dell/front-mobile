import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroCursoPage } from './cadastro-curso';

@NgModule({
  declarations: [
    CadastroCursoPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroCursoPage),
  ],
})
export class CadastroCursoPageModule {}
