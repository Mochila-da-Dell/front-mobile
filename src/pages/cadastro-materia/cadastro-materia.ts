import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, Alert} from 'ionic-angular';

import { Turma } from '../../models/turma.dto';
import { HttpClient } from '@angular/common/http';
import { MateriaDaoProvider } from '../../providers/materia-dao/materia-dao';
import { MateriaServiceProvider } from '../../providers/materia-service/materia-service';
import { CadastroPage } from '../cadastro/cadastro';
import { Materia } from '../../models/Materia.dto';


/**
 * Generated class for the CadastroMateriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-materia',
  templateUrl: 'cadastro-materia.html',
})
export class CadastroMateriaPage {

  public turma: Turma[];

  public nomeMateria: string= '';
  public salaMateria: string= '';
  public turmaMateria: string= '';
  public professorMateria: string= '';

  private _alerta: Alert;
  constructor(
    public navCtrl: NavController,
    private _http: HttpClient,
    private _alertCtrl: AlertController,
    private _materiaService: MateriaServiceProvider,
    private _materiaDao: MateriaDaoProvider
    ) {
    this._http.get<Turma[]>('http://localhost:8080/turma/listar')
      .subscribe(
        (turma) => {
          console.log(turma);
          this.turma = turma;
        }
      );
  }
  cadastroMateria() {
    
    if (!this.nomeMateria || !this.turmaMateria) {
      this._alertCtrl.create({
        title: 'Preenchimento obrigatório!',
        subTitle: 'Preencha todos os campos!',
        buttons: [
          { text: 'Ok' }
        ]
      }).present()
      return;
    }

    
    let cadastro: Materia = {
      
      nome: this.nomeMateria,
      sala: this.salaMateria,
      turma: this.turmaMateria,
      professor: this.professorMateria,
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

    this._materiaDao.ehDuplicado(cadastro)
        .mergeMap(ehDuplicado => {
          if(ehDuplicado){
            throw new Error('Cadastro já realizado!');
          }

          return this._materiaService.cadastroMateria(cadastro);
        })
      .mergeMap((valor) => {
      
      let observable = this._materiaDao.salva(cadastro);
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
    console.log('ionViewDidLoad CadastroMateriaPage');
  }

}
