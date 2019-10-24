import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  constructor(public navCtrl: NavController, private view: ViewController) {
  }
  closeModal(){
    this.view.dismiss();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }
  public irParaCadastroUsuario(){
    this.navCtrl.push('CadastroUsuarioPage')
  }
  public irParaPaginaInicial(){
    this.navCtrl.push('ProfessorPage');
  }
}
