import { Injectable } from '@angular/core';
import { tokenChamadaAluno } from '../../models/token-chamada';

import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the TokenChamadaDaoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TokenChamadaDaoProvider {

  constructor(private _storage: Storage) {
    console.log('Hello TokenChamadaDaoProvider Provider');
  }
  private _geraChave(cadastro: tokenChamadaAluno){
    return cadastro.data;
 }
 salva(cadastro: tokenChamadaAluno) { //vamos usar o storagem do ionic para salvar na nossa base
   let chave = this._geraChave(cadastro);
   let promise = this._storage.set(chave, cadastro);

   return Observable.fromPromise(promise);
 }

 ehDuplicado(cadastro: tokenChamadaAluno){
   let chave = this._geraChave(cadastro);
   let promise = this._storage
                     .get(chave)
                     .then(dado => dado ? true : false);
                   
   return Observable.fromPromise(promise);
 }

 listaTodos(){
   let cadastros: tokenChamadaAluno[] = [];

   let promise = this._storage.forEach((cadastro: tokenChamadaAluno) => {
     cadastros.push(cadastro);
   })
   .then(() => cadastros);

   return Observable.fromPromise(promise);
 }
}
