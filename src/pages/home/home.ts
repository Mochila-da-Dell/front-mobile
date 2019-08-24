import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  public login(){
    this.navCtrl.setRoot('ProftelainicialPage');//Metodo de navegação da pagina login para pagina proftelainicial.
  }
}
