import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Alert, AlertController } from 'ionic-angular';

import { TokenChamadaDaoProvider } from '../../providers/token-chamada-dao/token-chamada-dao';
import { tokenChamadaAluno } from '../../models/token-chamada';
import { Materia } from '../../models/materia.dto';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';




/**
 * Generated class for the AlunoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aluno',
  templateUrl: 'aluno.html',
})
export class AlunoPage {

  public materia: Materia[];

  public data: string = '';
  public aluno: number = 2;
  public nomeMateria: string = '';
  public Token: string = '';

  private _url= 'http://localhost:8080';

  


  private _alerta: Alert;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private _alertCtrl: AlertController,
    
    private _tokenChamadaDao: TokenChamadaDaoProvider,
    private _http: HttpClient) {

      this._http.get<Materia[]>('http://localhost:8080/materia/listar')
      .subscribe(
        (materia) => {
          console.log(materia);
          this.materia = materia;
        }
      );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlunoPage');
  }
  
  
  inserirToken(cadastro: tokenChamadaAluno){
    console.log(cadastro);
    console.log(this.Token);
    console.log(this.nomeMateria);
    return this._http
               .post(this._url+'/chamada/presente/'+this.Token, cadastro)
               .do(() => cadastro.enviado = true)
               .catch((err) => Observable.of(new Error('Falha na conexão! Tente novamente mais tarde')));

               
   }
  
  inserirTokenChamada() {
    
    if (!this.aluno || !this.materia) {
      this._alertCtrl.create({
        title: 'Preenchimento obrigatório!',
        subTitle: 'Preencha todos os campos!',
        buttons: [
          { text: 'Ok' }
        ]
      }).present()
      return;
    }
    let cadastro: tokenChamadaAluno = {
      aluno: this.aluno,
      data: this.data,
      materia: this.nomeMateria,
      confirmado: false,
      enviado: false,
    };
    console.log(cadastro);
    this._alerta = this._alertCtrl.create({
      title: 'Aviso',
      buttons: [
        {text: 'OK', 
        handler: () => {
          this.navCtrl.setRoot('AlunoPage');
        }}
      ]
    });

    let mensagem = '';

    this._tokenChamadaDao.ehDuplicado(cadastro)
        .mergeMap(ehDuplicado => {
          if(ehDuplicado){
            throw new Error('Token já utilizado!');
          }

          return this.inserirToken(cadastro);
        })
      .mergeMap((valor) => {
      
      let observable = this._tokenChamadaDao.salva(cadastro);
      if(valor instanceof Error) {
        throw valor;
      }
      return observable;
    })  
    .finally(
        () => {
          this._alerta.setSubTitle(mensagem);
          this._alerta.present();
        }
      )
      .subscribe(
        () => mensagem = 'Presença confirmada!',
        (err: Error) => mensagem = err.message
      );
  }
}
