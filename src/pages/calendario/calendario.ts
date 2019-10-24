import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CalendarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calendario',
  templateUrl: 'calendario.html',
})
export class CalendarioPage {

  public calendario : Array<Object> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.calendario = [
      {
        "dia": "1",
        "instituicao": "Universidade São Judas Tadeu",
        "curso": "Sistemas de informação",
        "turma": "MCA4101-12",
      },
      {
        "dia": "2",
        "intituicao": "",
        "curso": "",
        "turma": "",
      },
      {
        "dia": "3",
        "intituicao": "",
        "curso": "",
        "turma": "",
      }
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalendarioPage');
  }

}
