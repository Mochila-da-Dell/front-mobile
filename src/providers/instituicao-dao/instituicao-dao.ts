import { Injectable } from '@angular/core';
import { Instituicao } from '../../models/Instituicao';

import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class InstituicaoDaoProvider {

  constructor(private _storage: Storage) {
    console.log('Hello InstituicaoDaoProvider Provider');
  }

  private _geraChave(cadastro: Instituicao){
     return cadastro.nomeInstituicao + cadastro.unidadeInstituicao;
  }
  salva(cadastro: Instituicao) { //vamos usar o storagem do ionic para salvar na nossa base
    let chave = this._geraChave(cadastro);
    let promise = this._storage.set(chave, cadastro);

    return Observable.fromPromise(promise);
  }

  ehDuplicado(cadastro: Instituicao){
    let chave = this._geraChave(cadastro);
    let promise = this._storage
                      .get(chave)
                      .then(dado => dado ? true : false);
                    
    return Observable.fromPromise(promise);
  }

  listaTodos(){
    let cadastros: Instituicao[] = [];

    let promise = this._storage.forEach((cadastro: Instituicao) => {
      cadastros.push(cadastro);
    })
    .then(() => cadastros);

    return Observable.fromPromise(promise);
  }
}
