import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {

  }
  public irParaPaginaInicial(){
    this.navCtrl.setRoot('ProfessorPage');
  }
  public irParaCadastroUsuario(){
    this.navCtrl.setRoot('CadastroUsuarioPage')
  }
}
