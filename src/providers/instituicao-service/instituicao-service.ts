import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import {DatePipe} from '@angular/common';
import { Instituicao } from '../../models/Instituicao';
import { Observable } from 'rxjs';

/*
  Generated class for the InstituicaoServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InstituicaoServiceProvider {

  private _url= 'http://locahost:8080/cadastroInstuicao';
  constructor(private _http: HttpClient) {
  
  }
  public insert(){
     
  }
  public update(){

  }
  public save(){

  }
  public remove(){

  }
  public getAll(){

  }
  cadastroInstituicao(cadastro: Instituicao){
   return this._http
              .post(this._url+'cadastro/instituicao', cadastro)
              .do(() => cadastro.enviado = true)
              .catch((err) => Observable.of(new Error('Falha no cadastro! Tente novamente mais tarde')));
  }
 
}
