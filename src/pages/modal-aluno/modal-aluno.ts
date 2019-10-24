import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalAlunoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-aluno',
  templateUrl: 'modal-aluno.html',
})
export class ModalAlunoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController) {
  }
  closeModal(){
    this.view.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalAlunoPage');
  }
  public irParaCadastroUsuario(){
    this.navCtrl.push('CadastroUsuarioPage')
  }
}
