import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Alert } from 'ionic-angular';
import { InstituicaoServiceProvider } from '../../providers/instituicao-service/instituicao-service';
import { CadastroPage } from '../cadastro/cadastro';
import { Instituicao } from "../../models/Instituicao";
import { InstituicaoDaoProvider } from '../../providers/instituicao-dao/instituicao-dao';


// import { InstituicaoDaoProvider } from '../../providers/instituicao-dao/instituicao-dao';

/**
 * Generated class for the CadastroInstituicaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-instituicao',
  templateUrl: 'cadastro-instituicao.html',
})
export class CadastroInstituicaoPage {

  public nomeFantasia: string = '';
  public sigla: string = '';
  public campus: string = '';
  public endereco: string = '';
  public cnpj: string = '';

  private _alerta: Alert;
  
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private _alertCtrl: AlertController,
    private _instituicaoService: InstituicaoServiceProvider,
    
     private _instituicaoDao: InstituicaoDaoProvider,
    ) {

     

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroInstituicaoPage');
  }
  
  cadastroInst() {
    
    if (!this.nomeFantasia || !this.campus) {
      this._alertCtrl.create({
        title: 'Preenchimento obrigatório!',
        subTitle: 'Preencha todos os campos!',
        buttons: [
          { text: 'Ok' }
        ]
      }).present()
      return;
    }
    let cadastro: Instituicao = {
      nome_fantasia: this.nomeFantasia,
      sigla: this.sigla,
      campus: this.campus,
      endereco: this.endereco,
      cnpj: this.cnpj,
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

    this._instituicaoDao.ehDuplicado(cadastro)
        .mergeMap(ehDuplicado => {
          if(ehDuplicado){
            throw new Error('Cadastro já realizado!');
          }

          return this._instituicaoService.cadastroInstituicao(cadastro);
        })
      .mergeMap((valor) => {
      
      let observable = this._instituicaoDao.salva(cadastro);
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
  

}
  

