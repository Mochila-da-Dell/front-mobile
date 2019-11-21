import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


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
  rootNavCtrl: NavController;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.rootNavCtrl = this.navParams.get('rootNavCtrl');
  }
  public irParaProfessor(){
    this.navCtrl.setRoot('ProfessorPage')
  }
  public irParaCadastro(){
    this.navCtrl.setRoot('CadastroPage')
  }
  public irParaChamada(){
    this.navCtrl.setRoot('ChamadaPage')
  }
  public irParaCadastroInstituicao(){
    this.navCtrl.push('CadastroInstituicaoPage');
  }
  public irParaCadastroCurso(){
    this.navCtrl.push('CadastroCursoPage');
  }
  public irParaCadastroTurma(){
    this.navCtrl.push('CadastroTurmaPage');
  }
  public irParaCadastroMateria(){
    this.navCtrl.push('CadastroMateriaPage');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

}
