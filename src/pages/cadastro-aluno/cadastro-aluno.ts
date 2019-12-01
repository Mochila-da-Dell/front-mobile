import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Alert, AlertController } from 'ionic-angular';
import { UsuariosServiceProvider } from '../../providers/usuarios-service/usuarios-service';
import { AlunoDaoProvider } from '../../providers/aluno-dao/aluno-dao';
import { Aluno } from '../../models/aluno.dto';
import { ModalAlunoPage } from '../modal-aluno/modal-aluno';
/**
 * Generated class for the CadastroAlunoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-aluno',
  templateUrl: 'cadastro-aluno.html',
})
export class CadastroAlunoPage {

  public alunoNome: string = '';
  public alunoRa: string = '';
  public alunoEmail: string = '';
  public alunoSenha: string = '';
  
  private _alerta: Alert;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private _alertCtrl: AlertController,
    private _usuarioService: UsuariosServiceProvider,
    private _alunoDao: AlunoDaoProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroAlunoPage');
  }

  cadastrarAluno() {
    
    if (!this.alunoEmail || !this.alunoSenha) {
      this._alertCtrl.create({
        title: 'Preenchimento obrigatório!',
        subTitle: 'Preencha todos os campos!',
        buttons: [
          { text: 'Ok' }
        ]
      }).present()
      return;
    }
    let cadastro: Aluno = {
      nome: this.alunoNome,
      ra: this.alunoRa,
      email: this.alunoEmail,
      senha: this.alunoSenha,
      confirmado: false,
      enviado: false,
    };

    this._alerta = this._alertCtrl.create({
      title: 'Aviso',
      buttons: [
        {text: 'OK', 
        handler: () => {
          this.navCtrl.setRoot(ModalAlunoPage);
        }}
      ]
    });

    let mensagem = '';

    this._alunoDao.ehDuplicado(cadastro)
        .mergeMap(ehDuplicado => {
          if(ehDuplicado){
            throw new Error('Cadastro já realizado!');
          }

          return this._usuarioService.cadastroAluno(cadastro);
        })
      .mergeMap((valor) => {
      
      let observable = this._alunoDao.salva(cadastro);
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
