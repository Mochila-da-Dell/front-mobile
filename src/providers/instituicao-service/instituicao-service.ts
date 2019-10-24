import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Instituicao } from '../../models/cadastro';

@Injectable()
export class InstituicaoServiceProvider {

  constructor(private _http: HttpClient) {
    console.log('Hello InstituicaoServiceProvider Provider');
  }
  
  lista(){
    return this._http.get<Instituicao[]>('http://localhost:8080/api/carro/listaTodos') 
  }
}
