import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroTurmaPage } from './cadastro-turma';

@NgModule({
  declarations: [
    CadastroTurmaPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroTurmaPage),
  ],
})
export class CadastroTurmaPageModule {}
