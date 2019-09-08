import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { ModalController} from '@ionic/angular';
//import { CadastroInstituicaoPage } from '../cadastro-instituicao/cadastro-instituicao';

@IonicPage()
@Component({
  selector: 'page-instituicao',
  templateUrl: 'instituicao.html',
})
export class InstituicaoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,){

    }
  
  public irParaCadastroInstituicao(){
    this.navCtrl.setRoot('CadastroInstituicaoPage')
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad InstuicaoPage');
  }

}
