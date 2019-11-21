import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChamadaPage } from './chamada';
import { SuperTabsModule } from 'ionic2-super-tabs';

@NgModule({
  declarations: [
    ChamadaPage,
  ],
  imports: [
    IonicPageModule.forChild(ChamadaPage),
    SuperTabsModule
  ],
  exports: [
    ChamadaPage
  ]
})
export class ChamadaPageModule {}
