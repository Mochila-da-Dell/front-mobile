import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController  } from 'ionic-angular';
import { AlunoDTO } from '../../models/credencias_aluno.dto';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { UsuariosServiceProvider } from '../../providers/usuarios-service/usuarios-service';

/**
 * Generated class for the ModalAlunoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-aluno',
  templateUrl: 'modal-aluno.html',
})
export class ModalAlunoPage {
  
  email: string;
  senha: string;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private view: ViewController,
    private _usuarioService: UsuariosServiceProvider,
    public afAuth: AngularFireAuth,
    private _alertCtrl: AlertController,) {
  }
  loginWithFacebook(){
    this.afAuth.auth.signInWithPopup( new auth.FacebookAuthProvider())
    .then( res =>{
      console.log(res);
      this.navCtrl.setRoot('AlunoPage');
    })
  }
  closeModal(){
    this.view.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalAlunoPage');
  }
  public loginAluno(){
    this.navCtrl.setRoot('AlunoPage')
  }
  efetuaLoginAluno(){
    console.log(this.email); 
    console.log(this.senha);

    this._usuarioService
    .efetuaLoginAluno(this.email, this.senha)
    .subscribe(
      (usuario: AlunoDTO) => {
        console.log(usuario)
        this.navCtrl.setRoot('AlunoPage');
      },
      () => {
        this._alertCtrl.create({
          title: 'Falha no login',
          subTitle: 'Email ou senha incorretos! Verifique!',
          buttons: [
            {text: 'Ok'}
          ]
        }).present();
      }
    )
    
    
  }
  public irParaCadastroUsuario(){
    this.navCtrl.push('CadastroAlunoPage')
  }
}
