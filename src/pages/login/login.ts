import { Component } from '@angular/core';
import { NavController, IonicPage, ModalController, MenuController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, 
    private modal: ModalController,
    public menu: MenuController) {

  }
  ionViewWillEnter(){
    this.menu.swipeEnable(false);
  }
  ionViewDidLeave(){
    this.menu.swipeEnable(true);
  }

  openModal(){
    
    const myModal = this.modal.create('ModalPage',)

    myModal.present();
  }
  openModalAluno(){
    
    const myModal = this.modal.create('ModalAlunoPage',)

    myModal.present();
  }
  
}