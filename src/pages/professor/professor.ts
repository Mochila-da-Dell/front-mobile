import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProftelainicialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-professor',
  templateUrl: 'professor.html',
})
export class ProfessorPage {

  constructor(
    public navCtrl: NavController, public navParams: NavParams) {
  }
  public irParaCadastro(){
    this.navCtrl.setRoot('CadastroPage')
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfessorPage');
  }

}
