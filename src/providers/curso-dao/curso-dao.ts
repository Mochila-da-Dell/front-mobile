import { Injectable } from '@angular/core';
import { CursoDTO } from '../../models/curso.dto';

import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the CursoDaoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CursoDaoProvider {
  constructor(private _storage: Storage) {
    console.log('Hello CursoDaoProvider Provider');
  }

  private _geraChave(cadastro: CursoDTO){
    return cadastro.nome + cadastro.tipo;
 }
 salva(cadastro: CursoDTO) { //vamos usar o storagem do ionic para salvar na nossa base
   let chave = this._geraChave(cadastro);
   let promise = this._storage.set(chave, cadastro);

   return Observable.fromPromise(promise);
 }

 ehDuplicado(cadastro: CursoDTO){
   let chave = this._geraChave(cadastro);
   let promise = this._storage
                     .get(chave)
                     .then(dado => dado ? true : false);
                   
   return Observable.fromPromise(promise);
 }

 listaTodos(){
   let cadastros: CursoDTO[] = [];

   let promise = this._storage.forEach((cadastro: CursoDTO) => {
     cadastros.push(cadastro);
   })
   .then(() => cadastros);

   return Observable.fromPromise(promise);
 }
}
