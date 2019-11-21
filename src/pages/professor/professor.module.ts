import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfessorPage } from './professor';
import { SuperTabsModule } from 'ionic2-super-tabs';

@NgModule({
  declarations: [
    ProfessorPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfessorPage),
    SuperTabsModule
  ],

})
export class ProfessorPageModule {}
