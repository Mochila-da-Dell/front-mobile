import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, AlertController } from 'ionic-angular';
import { UsuariosServiceProvider } from '../../providers/usuarios-service/usuarios-service';
import { UsuarioDto } from '../../models/usuario.dto';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';


/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
 
    email: string;
    senha: string;

  constructor(public navCtrl: NavController, 
    private view: ViewController,
    private _alertCtrl: AlertController,
    private _usuarioService: UsuariosServiceProvider,
    public afAuth: AngularFireAuth) {
  }
  loginWithFacebook(){
    this.afAuth.auth.signInWithPopup( new auth.FacebookAuthProvider())
    .then( res =>{
      console.log(res);
      this.navCtrl.setRoot('ProfessorPage');
    })
  }
  closeModal(){
    this.view.dismiss();
  }
  
  efetuaLogin(){
    console.log(this.email); 
    console.log(this.senha);

    this._usuarioService
    .efetuaLogin(this.email, this.senha)
    .subscribe(
      (usuario: UsuarioDto) => {
        console.log(usuario)
        this.navCtrl.setRoot('ProfessorPage');
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
    this.navCtrl.push('CadastroUsuarioPage')
  }
  public irParaPaginaInicial(){
    this.navCtrl.setRoot('ProfessorPage');
  }
}
