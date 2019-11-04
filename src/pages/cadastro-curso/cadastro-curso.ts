import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Instituicao } from "../../models/Instituicao";

/**
 * Generated class for the CadastroCursoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-curso',
  templateUrl: 'cadastro-curso.html',
})
export class CadastroCursoPage {

  public instituicao: Instituicao;

  public instituicaoSelecionada:String = '';
  public localSelecionado: String='';
  public nomeDoCurso: String='';
  
  constructor(public navCtrl: NavController, 
    public navParams: NavParams) {

      this.instituicao = this.navParams.get('instituicaoSelecionada');
  }
  cadastroCurso(){
    console.log(this.instituicao.nomeInstituicao);
    console.log(this.instituicao.unidadeInstituicao);
    console.log(this.nomeDoCurso);

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroCursoPage');
  }

}
