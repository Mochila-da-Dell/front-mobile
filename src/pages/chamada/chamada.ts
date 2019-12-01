import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Alert, AlertController } from 'ionic-angular';
import { SuperTabs } from 'ionic2-super-tabs';
import { Token } from '../../models/token.dto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * Generated class for the ChamadaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-chamada',
  templateUrl: 'chamada.html',
})
export class ChamadaPage {
  
  private _url= 'http://localhost:8080';

  private _token: Token;

  

  result:any= [];
  token: Observable<any>;

  // private _alerta: Alert;

  @ViewChild(SuperTabs) superTabs: SuperTabs;
  constructor(public navCtrl: NavController, public navParams: NavParams, private _http: HttpClient, private _alertCtrl: AlertController,) {
  }
  public irParaProfessor(){
    this.navCtrl.setRoot("ProfessorPage")
  }
  public irParaCadastro(){
    this.navCtrl.push("CadastroPage")
  }
  public irParaChamada(){
    this.navCtrl.push("ChamadaPage")
  }
  public irParaListaAlunos(){
    this.navCtrl.push('ListaChamadaPage')
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ChamadaPage');
  }
  
  postToken(){
    let postToken = new FormData();
    postToken.append('id', 'token')
    this.token = this._http.post(this._url + '/token-chamada/cadastrar', postToken);
    this.token.subscribe(token =>{
      this.result = token;
      console.log(this.result.token);
      
      
      this._alertCtrl.create({
        title: this.result.token,
        buttons: [
          { text: 'Ok' }
        ]
      }).present()
      return;
    })
  }
}
