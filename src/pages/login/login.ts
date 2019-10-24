import { Component } from '@angular/core';
import { NavController, IonicPage, ModalController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, private modal: ModalController) {

  }
  openModal(){
    const myData = {
      
    }
    const myModal = this.modal.create('ModalPage',)

    myModal.present();
  }
  openModalAluno(){
    const myData = {
      
    }
    const myModal = this.modal.create('ModalAlunoPage',)

    myModal.present();
  }
  
}
