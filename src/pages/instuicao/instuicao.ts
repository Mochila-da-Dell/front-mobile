import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { ModalController} from '@ionic/angular';
//import { CadastroInstituicaoPage } from '../cadastro-instituicao/cadastro-instituicao';

/**
 * Generated class for the InstuicaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-instuicao',
  templateUrl: 'instuicao.html',
})
export class InstuicaoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,){

    }
  
  public irParaCadastroInstituicao(){
    this.navCtrl.setRoot('CadastroInstituicaoPage')
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad InstuicaoPage');
  }

}
