import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SuperTabsController } from 'ionic2-super-tabs';
import { CadastroPage } from '../cadastro/cadastro';
import { ChamadaPage } from '../chamada/chamada';


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
  
  pages = [
    { pageName: CadastroPage.name, title: 'Cadastro', icon: 'flame', id: 'cadastroTab'},
    { pageName: ChamadaPage.name, title: 'EstouAqui', icon: 'help-circle', id: 'chamadaTab'},
    { pageName: CadastroPage.name, title: 'Listagem', icon: 'body', id: 'listaTab'}
  ];

  selectedTab = 1;

  @ViewChild(SuperTabsController) superTabs: SuperTabsController;
 
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    ) {
  }
  
  onTabSelect(ev: any) {
    console.log(ev.index)
      this.selectedTab = ev.index;
  
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
  public irParaChamada(){
    this.navCtrl.setRoot('ChamadaPage')
  }
  // implementando menu
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfessorPage');
  }

}
