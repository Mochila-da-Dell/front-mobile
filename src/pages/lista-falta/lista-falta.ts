import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ListaFalta } from '../../models/lista_falta.dto';

/**
 * Generated class for the ListaFaltaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-falta',
  templateUrl: 'lista-falta.html',
})
export class ListaFaltaPage {

  public listaFalta: ListaFalta[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private _http: HttpClient) {
      
      this._http.get<ListaFalta[]>('http://localhost:8080/chamada/listar/faltas')
      .subscribe(
        (listaFalta) => {
          console.log(listaFalta);
          this.listaFalta = listaFalta;
        }
      );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaFaltaPage');
  }

}
