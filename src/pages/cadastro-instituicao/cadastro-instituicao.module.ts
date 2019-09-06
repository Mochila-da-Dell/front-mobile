import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroInstituicaoPage } from './cadastro-instituicao';

@NgModule({
  declarations: [
    CadastroInstituicaoPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroInstituicaoPage),
  ],
})
export class CadastroInstituicaoPageModule {}
