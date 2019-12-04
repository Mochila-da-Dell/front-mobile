import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaFaltaPage } from './lista-falta';

@NgModule({
  declarations: [
    ListaFaltaPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaFaltaPage),
  ],
})
export class ListaFaltaPageModule {}
