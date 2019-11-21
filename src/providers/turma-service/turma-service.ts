import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Turma } from '../../models/turma.dto';
import { Observable } from 'rxjs';

/*
  Generated class for the TurmaServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TurmaServiceProvider {

  private _url= 'http://localhost:8080';

  constructor(public _http: HttpClient) {
    console.log('Hello TurmaServiceProvider Provider');
  }

  cadastroTurma(cadastro: Turma){
    return this._http
               .post(this._url+'/turma/cadastrar', cadastro)
               .do(() => cadastro.enviado = true)
               .catch((err) => Observable.of(new Error('Falha no cadastro! Tente novamente mais tarde')));
   }
}
