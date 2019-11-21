import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SuperTabs } from 'ionic2-super-tabs';

/**
 * Generated class for the ChamadaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chamada',
  templateUrl: 'chamada.html',
})
export class ChamadaPage {
  @ViewChild(SuperTabs) superTabs: SuperTabs;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  public irParaProfessor(){
    this.navCtrl.setRoot("ProfessorPage")
  }
  public irParaCadastro(){
    this.navCtrl.setRoot("CadastroPage")
  }
  public irParaChamada(){
    this.navCtrl.setRoot("ChamadaPage")
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ChamadaPage');
  }
  
}
