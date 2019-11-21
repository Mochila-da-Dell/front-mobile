import { Injectable } from '@angular/core';
import { Turma } from '../../models/turma.dto';

import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the TurmaDaoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TurmaDaoProvider {

  constructor(private _storage: Storage) {
    console.log('Hello TurmaDaoProvider Provider');
  }

  private _geraChave(cadastro: Turma){
    return cadastro.nome + cadastro.universidade;
 }
 salva(cadastro: Turma) { //vamos usar o storagem do ionic para salvar na nossa base
   let chave = this._geraChave(cadastro);
   let promise = this._storage.set(chave, cadastro);

   return Observable.fromPromise(promise);
 }

 ehDuplicado(cadastro: Turma){
   let chave = this._geraChave(cadastro);
   let promise = this._storage
                     .get(chave)
                     .then(dado => dado ? true : false);
                   
   return Observable.fromPromise(promise);
 }

 listaTodos(){
   let cadastros: Turma[] = [];

   let promise = this._storage.forEach((cadastro: Turma) => {
     cadastros.push(cadastro);
   })
   .then(() => cadastros);

   return Observable.fromPromise(promise);
 }

}
