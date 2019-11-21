import { Injectable } from '@angular/core';
import { Materia } from '../../models/materia.dto';

import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the MateriaDaoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MateriaDaoProvider {

  constructor(private _storage: Storage) {
    console.log('Hello MateriaDaoProvider Provider');
  }

  private _geraChave(cadastro: Materia){
    return cadastro.nome + cadastro.sala;
 }
 salva(cadastro: Materia) { //vamos usar o storagem do ionic para salvar na nossa base
   let chave = this._geraChave(cadastro);
   let promise = this._storage.set(chave, cadastro);

   return Observable.fromPromise(promise);
 }

 ehDuplicado(cadastro: Materia){
   let chave = this._geraChave(cadastro);
   let promise = this._storage
                     .get(chave)
                     .then(dado => dado ? true : false);
                   
   return Observable.fromPromise(promise);
 }

 listaTodos(){
   let cadastros: Materia[] = [];

   let promise = this._storage.forEach((cadastro: Materia) => {
     cadastros.push(cadastro);
   })
   .then(() => cadastros);

   return Observable.fromPromise(promise);
 }

}
