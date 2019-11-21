import { Injectable } from '@angular/core';
import { Professor } from '../../models/professor.dto';

import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the ProfessordaoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProfessordaoProvider {

  constructor(private _storage: Storage) {
    console.log('Hello ProfessordaoProvider Provider');
  }
  private _geraChave(cadastro: Professor){
    return cadastro.email + cadastro.senha;
 }
 salva(cadastro: Professor) { //vamos usar o storagem do ionic para salvar na nossa base
   let chave = this._geraChave(cadastro);
   let promise = this._storage.set(chave, cadastro);

   return Observable.fromPromise(promise);
 }

 ehDuplicado(cadastro: Professor){
   let chave = this._geraChave(cadastro);
   let promise = this._storage
                     .get(chave)
                     .then(dado => dado ? true : false);
                   
   return Observable.fromPromise(promise);
 }

 listaTodos(){
   let cadastros: Professor[] = [];

   let promise = this._storage.forEach((cadastro: Professor) => {
     cadastros.push(cadastro);
   })
   .then(() => cadastros);

   return Observable.fromPromise(promise);
 }
}
