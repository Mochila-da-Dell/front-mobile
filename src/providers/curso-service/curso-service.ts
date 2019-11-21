import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_CONFIG } from '../../config/api.config';
import { CursoDTO } from '../../models/curso.dto';
import { Observable } from 'rxjs/Rx';



@Injectable()
export class CursoServiceProvider {

  constructor(public _http: HttpClient) {
    console.log('Hello CursoServiceProvider Provider');
  }
  
  
  private _url= 'http://localhost:8080';
  
  cadastroCurso(cadastro: CursoDTO){
    return this._http
               .post(this._url+'/curso/cadastrar', cadastro)
               .do(() => cadastro.enviado = true)
               .catch((err) => Observable.of(new Error('Falha no cadastro! Tente novamente mais tarde')));
   }
  
  
  
  
  findAll() : Observable<CursoDTO[]> {
    return this._http.get<CursoDTO[]>(`${API_CONFIG.baseUrl}/curso/listar`);
    
  }

}
