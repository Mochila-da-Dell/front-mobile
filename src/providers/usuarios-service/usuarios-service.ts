import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioDto } from '../../models/usuario.dto';
import { API_CONFIG } from '../../config/api.config';
import { Professor } from "../../models/professor.dto";
import { Aluno } from "../../models/aluno.dto";
import { Observable } from 'rxjs';
import { AlunoDTO } from '../../models/credencias_aluno.dto';

@Injectable()
export class UsuariosServiceProvider {

  private _usuarioLogado: UsuarioDto;

  private _alunoLogado : AlunoDTO

  private _url= 'http://localhost:8080';

  constructor(private _http: HttpClient) {
  
  }
  efetuaLoginProfessor(email, senha){
    return this._http.post<UsuarioDto>(`${API_CONFIG.baseUrl}/professor/fazerLogin`,{email, senha})
              .do((usuario: UsuarioDto) => this._usuarioLogado = usuario);
  }
  efetuaLoginAluno(email, senha){
    return this._http.post<AlunoDTO>(`${API_CONFIG.baseUrl}/aluno/fazerLogin`,{email, senha})
              .do((usuario: AlunoDTO) => this._alunoLogado = usuario);
  }
  obtemUsuarioLogado(){
    return this._usuarioLogado;
  }
  obtemAlunoLogado(){
    console.log(this._alunoLogado);
    return this._alunoLogado;
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
