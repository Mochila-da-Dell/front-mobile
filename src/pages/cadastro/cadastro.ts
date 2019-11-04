import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InstituicaoPage } from '../instuicao/instituicao';
import { CadastroInstituicaoPage } from '../cadastro-instituicao/cadastro-instituicao';

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  public irParaCadastroInstituicao(){
    this.navCtrl.push(CadastroInstituicaoPage.name);
  }
  public irParaInstituicao(){
    this.navCtrl.push(InstituicaoPage.name);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

}
