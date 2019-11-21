import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Alert, AlertController } from 'ionic-angular';
import { UsuariosServiceProvider } from '../../providers/usuarios-service/usuarios-service';
import { Professor } from '../../models/professor.dto';
import { ProfessordaoProvider } from '../../providers/professordao/professordao';
import { ModalPage } from '../modal/modal';


/**
 * Generated class for the CadastroUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-usuario',
  templateUrl: 'cadastro-usuario.html',
})
export class CadastroUsuarioPage {

  public professorNome: string = '';
  public professorRap: string = '';
  public professorEmail: string = '';
  public professorSenha: string = '';

  private _alerta: Alert;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private _alertCtrl: AlertController,
    private _usuarioService: UsuariosServiceProvider,
    private _instituicaoDao: ProfessordaoProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroUsuarioPage');
  }

  cadastrarProfessor() {
    
    if (!this.professorEmail || !this.professorSenha) {
      this._alertCtrl.create({
        title: 'Preenchimento obrigatório!',
        subTitle: 'Preencha todos os campos!',
        buttons: [
          { text: 'Ok' }
        ]
      }).present()
      return;
    }
    let cadastro: Professor = {
      nome: this.professorNome,
      rap: this.professorRap,
      email: this.professorEmail,
      senha: this.professorSenha,
      confirmado: false,
      enviado: false,
    };

    this._alerta = this._alertCtrl.create({
      title: 'Aviso',
      buttons: [
        {text: 'OK', 
        handler: () => {
          this.navCtrl.setRoot(ModalPage);
        }}
      ]
    });

    let mensagem = '';

    this._instituicaoDao.ehDuplicado(cadastro)
        .mergeMap(ehDuplicado => {
          if(ehDuplicado){
            throw new Error('Cadastro já realizado!');
          }

          return this._usuarioService.cadastroProfessor(cadastro);
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
