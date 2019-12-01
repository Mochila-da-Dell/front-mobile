import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioDto } from '../../models/usuario.dto';
import { API_CONFIG } from '../../config/api.config';
import { Professor } from "../../models/professor.dto";
import { Aluno } from "../../models/aluno.dto";
import { Observable } from 'rxjs';

@Injectable()
export class UsuariosServiceProvider {

  private _usuarioLogado: UsuarioDto;

  private _url= 'http://localhost:8080';

  constructor(private _http: HttpClient) {
  
  }
  efetuaLogin(email, senha){
    return this._http.post<UsuarioDto>(`${API_CONFIG.baseUrl}/professor/fazerLogin`,{email, senha})
              .do((usuario: UsuarioDto) => this._usuarioLogado = usuario);
  }
  obtemUsuarioLogado(){
    return this._usuarioLogado;
  }
  
  cadastroProfessor(cadastro: Professor){
    return this._http
               .post(this._url+'/professor/cadastrar', cadastro)
               .do(() => cadastro.enviado = true)
               .catch((err) => Observable.of(new Error('Falha no cadastro! Tente novamente mais tarde')));
   }
   
   cadastroAluno(cadastro: Aluno){
    return this._http
               .post(this._url+'/aluno/cadastrar', cadastro)
               .do(() => cadastro.enviado = true)
               .catch((err) => Observable.of(new Error('Falha no cadastro! Tente novamente mais tarde')));
   }
}
