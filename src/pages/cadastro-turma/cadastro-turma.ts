import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, Alert} from 'ionic-angular';

import { Instituicao } from '../../models/Instituicao';
import { HttpClient } from '@angular/common/http';
import { CursoDTO } from '../../models/curso.dto';
import { Turma } from '../../models/turma.dto';
import { TurmaDaoProvider } from '../../providers/turma-dao/turma-dao';
import { TurmaServiceProvider } from '../../providers/turma-service/turma-service';
import { CadastroPage } from '../cadastro/cadastro';


/**
 * Generated class for the CadastroTurmaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-turma',
  templateUrl: 'cadastro-turma.html',
})
export class CadastroTurmaPage {

  public instituicao: Instituicao[];
  public curso : CursoDTO[];

  public nomeTurma: string = '';
  public universidadeTurma: string = '';
  public cursoTurma: string = '';
  
  private _alerta: Alert;
  
  constructor(public navCtrl: NavController, 
    private _http: HttpClient,
    private _alertCtrl: AlertController,
    private _turmaService: TurmaServiceProvider,
    private _turmaDao: TurmaDaoProvider,) {

    this._http.get<Instituicao[]>('http://localhost:8080/universidade/listar')
      .subscribe(
        (instituicao) => {
          console.log(instituicao);
          this.instituicao = instituicao;
        }
      );

      this._http.get<CursoDTO[]>('http://localhost:8080/curso/listar')
      .subscribe(
        (curso) => {
          console.log(curso);
          this.curso = curso;
        }
      );
  }
  cadastroTurma() {
    
    if (!this.nomeTurma || !this.universidadeTurma) {
      this._alertCtrl.create({
        title: 'Preenchimento obrigatório!',
        subTitle: 'Preencha todos os campos!',
        buttons: [
          { text: 'Ok' }
        ]
      }).present()
      return;
    }
    let cadastro: Turma = {
      
      nome: this.nomeTurma,
      universidade: this.universidadeTurma,
      curso: this.cursoTurma,
      confirmado: false,
      enviado: false,
      
    };

    this._alerta = this._alertCtrl.create({
      title: 'Aviso',
      buttons: [
        {text: 'OK', 
        handler: () => {
          this.navCtrl.setRoot(CadastroPage);
        }}
      ]
    });

    let mensagem = '';

    this._turmaDao.ehDuplicado(cadastro)
        .mergeMap(ehDuplicado => {
          if(ehDuplicado){
            throw new Error('Cadastro já realizado!');
          }

          return this._turmaService.cadastroTurma(cadastro);
        })
      .mergeMap((valor) => {
      
      let observable = this._turmaDao.salva(cadastro);
      if(valor instanceof Error) {
        throw valor;
      }
      return observable;
    })  
    .finally(
        () => {
          this._alerta.setSubTitle(mensagem);
          this._alerta.present();
        }
      )
      .subscribe(
        () => mensagem = 'Cadastro concluido!',
        (err: Error) => mensagem = err.message
      );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroTurmaPage');
  }

}
