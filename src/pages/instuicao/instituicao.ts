import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Instituicao } from '../../models/cadastro';
import { InstituicaoServiceProvider } from '../../providers/instituicao-service/instituicao-service';
import { HttpErrorResponse } from '@angular/common/http';
import { NavLifeCycles } from '../../utils/ionic/nav/nav-lifecycles';
  //import { ModalController} from '@ionic/angular';
//import { CadastroInstituicaoPage } from '../cadastro-instituicao/cadastro-instituicao';

@IonicPage()
@Component({
  selector: 'page-instituicao',
  templateUrl: 'instituicao.html',
})
export class InstituicaoPage implements NavLifeCycles{
  
  public instituicoes: Instituicao[];

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private _loadingCtrl: LoadingController,
    private _alertCtrl: AlertController,
    private _instituicaoService: InstituicaoServiceProvider){
    
  // Requisição no web service
    
    // Modo simple
    var l1 = {nome:'Universidade São Judas Tadeu', local:'Rua Taquari'};
    var l2 = {nome:'Uniesquina', local:'Barra Funda'};
    
    this.instituicoes = [l1, l2];
    
    }
    
    // ionViewDidLoad() {
    //   //Implementando o loading controller para aparecer no carregamento das paginas
    //   let loading = this._loadingCtrl.create({
    //     content: 'Carregando pagina...'
    //   });
    //   // Requisição no web service
    //   this._instituicaoService.lista()
    //   .subscribe(
    //     (instituicoes) => {
    //       this.instituicoes = instituicoes; 
    //       // para aparecer loading da lista
    //       loading.dismiss();     
    //     },
    //     (err: HttpErrorResponse) => {
    //       console.log(err);
    //       loading.dismiss();
    //       this._alertCtrl.create({
    //         title: 'Falha na conexão',
    //         subTitle: 'Não foi possivel carregar a pagina. Tente novamente mais tarde!',
    //         buttons: [
    //           {text: 'Ok' }
    //         ]
    //        }).present();
    //       }
    //   ); 
        
    // }
       
  public irParaCadastroCurso(instituicao: Instituicao){
    console.log(instituicao);
    this.navCtrl.push('CadastroCursoPage', {
      instituicaoSelecionada: instituicao
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad InstuicaoPage');
  }

}
