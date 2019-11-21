import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroMateriaPage } from './cadastro-materia';

@NgModule({
  declarations: [
    CadastroMateriaPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroMateriaPage),
  ],
})
export class CadastroMateriaPageModule {}
