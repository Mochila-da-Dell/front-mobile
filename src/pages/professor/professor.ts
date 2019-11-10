import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular/components/app/menu-controller';

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
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private menu: MenuController) {
  }
  public irParaInstituicao(){
    this.navCtrl.push('InstituicaoPage');
  }
  public irParaCurso(){
    this.navCtrl.push('CursoPage');
  }
  public irParaCalendario(){
    this.navCtrl.push('CalendarioPage');
  }
  public irParaCadastro(){
    this.navCtrl.push('CadastroPage');
  }
  // implementando menu
  openFirst(){
    this.menu.enable(true, 'first');
  }
  openEnd(){
    this.menu.open('end');
  }
  openCustom(){
    this.menu.enable(true, 'custom');
    this.menu.open('custom')
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfessorPage');
  }

}
