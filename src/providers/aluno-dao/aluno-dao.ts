import { Injectable } from '@angular/core';
import { Aluno } from '../../models/aluno.dto';

import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';
/*
  Generated class for the AlunoDaoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AlunoDaoProvider {

  constructor(private _storage: Storage) {
    console.log('Hello AlunoDaoProvider Provider');
  }
  private _geraChave(cadastro: Aluno){
    return cadastro.email + cadastro.senha;
 }
 salva(cadastro: Aluno) { //vamos usar o storagem do ionic para salvar na nossa base
   let chave = this._geraChave(cadastro);
   let promise = this._storage.set(chave, cadastro);

   return Observable.fromPromise(promise);
 }

 ehDuplicado(cadastro: Aluno){
   let chave = this._geraChave(cadastro);
   let promise = this._storage
                     .get(chave)
                     .then(dado => dado ? true : false);
                   
   return Observable.fromPromise(promise);
 }

 listaTodos(){
   let cadastros: Aluno[] = [];

   let promise = this._storage.forEach((cadastro: Aluno) => {
     cadastros.push(cadastro);
   })
   .then(() => cadastros);

   return Observable.fromPromise(promise);
 }
}
