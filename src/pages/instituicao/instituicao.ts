import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Instituicao } from '../../models/Instituicao';
import {API_CONFIG} from '../../config/api.config';
import { Observable } from 'rxjs/Rx';

@IonicPage()
@Component({
  selector: 'page-instituicao',
  templateUrl: 'instituicao.html',
})
export class InstituicaoPage {

  public instituicoes: Instituicao[];

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private _http: HttpClient) {

    
  }
  findAll(): Observable<Instituicao[]>{
      return this._http.get<Instituicao[]>(`${API_CONFIG.baseUrl}/universidades`);
  }
  
  ionViewDidLoad() {
    this.findAll()
      .subscribe(response => {
        console.log(response);
      },
      error => {
        console.log(error);
      });
  }

}
