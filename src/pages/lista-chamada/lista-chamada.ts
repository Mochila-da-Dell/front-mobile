import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ListaAlunos } from '../../models/lista_alunos.dto';

/**
 * Generated class for the ListaChamadaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-chamada',
  templateUrl: 'lista-chamada.html',
})
export class ListaChamadaPage {

  public listaAlunos: ListaAlunos[];
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private _http: HttpClient,) {
    
      this._http.get<ListaAlunos[]>('http://localhost:8080/chamada/listar')
    .subscribe(
      (listaAlunos) => {
        console.log(listaAlunos);
        this.listaAlunos = listaAlunos;
      }
    );
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaChamadaPage');
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
  public irParaListaAlunos(){
    this.navCtrl.setRoot('ListaChamadaPage')
  }
}
