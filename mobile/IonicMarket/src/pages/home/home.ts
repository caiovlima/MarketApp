import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { UtilService } from './../../providers/util.service';
import { ProdutoService } from './../../providers/produto.service';
import { ProdutoDetailPage } from '../produto-detail/produto-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  produtos : any[] = [];
  
  constructor(public navCtrl: NavController,
              private utilService : UtilService,
              private produtoService: ProdutoService,
              private alertCtrl: AlertController) {

  }

buscarProduto(nome : any){
  /* if(nome == null || nome.trim() == ""){
    return;

    }*/
    
    this.loadProdutos(nome);
  }

  loadProdutos(nome : string){
    let loading = this.utilService.showLoading();
    loading.present();

    this.produtoService.listarTodos(nome).then((response) =>{
      this.produtos = response.json();

      loading.dismiss();
    }).catch((response) => {
     console.log('error');
    });
  }

  novoProduto(){
    this.navCtrl.push('ProdutoPage');

  }

  detailProduto(){
    this.navCtrl.push('ProdutoDetailPage');
  }

  
}
