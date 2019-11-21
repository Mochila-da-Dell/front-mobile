import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Materia } from '../../models/Materia.dto';
import { Observable } from 'rxjs';
/*
  Generated class for the MateriaServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MateriaServiceProvider {

  private _url= 'http://localhost:8080';

  constructor(public _http: HttpClient) {
    console.log('Hello MateriaServiceProvider Provider');
  }

  cadastroMateria(cadastro: Materia){
    return this._http
               .post(this._url+'/materia/cadastrar', cadastro)
               .do(() => cadastro.enviado = true)
               .catch((err) => Observable.of(new Error('Falha no cadastro! Tente novamente mais tarde')));
   }

}
