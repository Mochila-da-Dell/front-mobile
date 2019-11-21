import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Alert } from 'ionic-angular';

import { CursoDaoProvider } from "../../providers/curso-dao/curso-dao";
import { CursoServiceProvider } from "../../providers/curso-service/curso-service";
import { CursoDTO } from "../../models/curso.dto"
import { CadastroPage } from '../cadastro/cadastro';

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

  public nomeCurso: string = ''; 
  public tipo: string = '';
  public duracao: string = '';

  private _alerta: Alert;
  
  
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private _alertCtrl: AlertController,
    private _cursoService: CursoServiceProvider,
    private _cursoDao: CursoDaoProvider,
    ) {

     
  }
  cadastroCurso() {
    
    if (!this.nomeCurso || !this.tipo) {
      this._alertCtrl.create({
        title: 'Preenchimento obrigatório!',
        subTitle: 'Preencha todos os campos!',
        buttons: [
          { text: 'Ok' }
        ]
      }).present()
      return;
    }
    let cadastro: CursoDTO = {
      nome: this.nomeCurso,
      tipo: this.tipo,
      duracao: this.duracao,
      confirmado: false,
      enviado: false,
    };

    this._alerta = this._alertCtrl.create({
      title: 'Aviso',
      buttons: [
        {text: 'OK', 
        handler: () => {
          this.navCtrl.setRoot(CadastroPage);
        }}
      ]
    });

    let mensagem = '';

    this._cursoDao.ehDuplicado(cadastro)
        .mergeMap(ehDuplicado => {
          if(ehDuplicado){
            throw new Error('Cadastro já realizado!');
          }

          return this._cursoService.cadastroCurso(cadastro);
        })
      .mergeMap((valor) => {
      
      let observable = this._cursoDao.salva(cadastro);
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
        () => mensagem = 'Cadastro concluido!',
        (err: Error) => mensagem = err.message
      );
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroCursoPage');
  }

}
