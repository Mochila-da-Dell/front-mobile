import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { CategoriaDTO } from "../../models/categoria.dto";
import { Observable } from "rxjs/Rx";
//Arquivo criado para teste de acordo com o curso

@Injectable()
export class CategoriaService{

    constructor(public http: HttpClient){
    }
    
    findAll() : Observable<CategoriaDTO[]> {
        return this.http.get<CategoriaDTO[]>(`${API_CONFIG.baseUrl}/categorias`);//Este metodo faz a requisição para o backend
    }
}
