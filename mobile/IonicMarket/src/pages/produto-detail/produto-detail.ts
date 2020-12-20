import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { UtilService } from '../../providers/util.service';
import { ProdutoService } from '../../providers/produto.service';



@IonicPage()
@Component({
  selector: 'page-produto-detail',
  templateUrl: 'produto-detail.html',
})
export class ProdutoDetailPage {

  produtos : any[] = [];
  

  constructor(public navCtrl: NavController,
    private utilService : UtilService,
    private produtoService: ProdutoService,
    private alertCtrl: AlertController) {

}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProdutoDetailPage');
  }

  
  

}
