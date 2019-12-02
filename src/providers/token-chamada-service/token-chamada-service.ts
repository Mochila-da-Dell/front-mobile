import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tokenChamadaAluno } from '../../models/token-chamada';
import { Observable } from 'rxjs';
import { Token } from '../../models/token.dto';

/*
  Generated class for the TokenChamadaServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/


@Injectable()
export class TokenChamadaServiceProvider {
  
  private _url= 'http://localhost:8080';
  
  constructor(public _http: HttpClient) {
    console.log('Hello TokenChamadaServiceProvider Provider');
  }

  inserirToken(cadastro: tokenChamadaAluno, _token: Token){
    console.log(_token)
    console.log(cadastro)
    return this._http
               .post(this._url+'/chamada/presente/'+ _token, cadastro)
               .do(() => cadastro.enviado = true)
               .catch((err) => Observable.of(new Error('Falha na conexão! Tente novamente mais tarde')));

               
   }
  
}
