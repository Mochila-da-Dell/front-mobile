import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AlunoDTO } from '../../models/credencias_aluno.dto';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';

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
  aluno : AlunoDTO = {
    email: "",
    senha: "",
  };
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private view: ViewController,
    public afAuth: AngularFireAuth) {
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
  public irParaCadastroUsuario(){
    this.navCtrl.push('CadastroAlunoPage')
  }
}
