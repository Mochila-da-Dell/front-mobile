import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ListaAlunos } from '../../models/lista_alunos.dto';
import { SelectSearchableComponent } from 'ionic-select-searchable';

import _ from 'lodash';

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
  
  allAlunos:any;
  queryText: string;
  
  @ViewChild('myselect') selectComponent: SelectSearchableComponent;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private _http: HttpClient,
    private toastCtrl: ToastController) {
    
      this._http.get<ListaAlunos[]>('http://localhost:8080/chamada/listar')
    .subscribe(
      (listaAlunos) => {
        console.log(listaAlunos);
        this.listaAlunos = listaAlunos;
      }
    );
    
    this.queryText = '';

    this.allAlunos = this.listaAlunos;
  }
  public alunoChange(event: {componen: SelectSearchableComponent, value: any}){
    console.log('event: ', event);
  }
  onClose(){
    let toast = this.toastCtrl.create({
      message: 'Thanks for your selection',
      duration: 2000
    });
    toast.present();
  }
  openFromCode(){
    this.selectComponent.open();
  }
  public filterAluno(alu: any){
    console.log(alu);
    let val = alu.target.value;
    if(val && val.trim() != ''){
      this.listaAlunos =  _.values(this.allAlunos);
      this.listaAlunos = this.listaAlunos.filter((listaAluno) =>{
        return (listaAluno.data.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else {
      this.listaAlunos = this.allAlunos;
    } 
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
  public irParaListaFalta(){
    this.navCtrl.push('ListaFaltaPage')
  }
}
