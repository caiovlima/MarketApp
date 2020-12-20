import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UtilService } from './../../providers/util.service';
import { ProdutoService } from './../../providers/produto.service';


@IonicPage()
@Component({
  selector: 'page-produto',
  templateUrl: 'produto.html',
})
export class ProdutoPage {

  form : FormGroup;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private formBuilder : FormBuilder,
              private utilService : UtilService,
              private produtoService: ProdutoService,
              private modalCtrl: ModalController) {
              
              this.form = this.formBuilder.group({
                produtoId: ['', Validators.compose([
                  Validators.minLength(1),
                  Validators.required
                ])],

                nome: ['', Validators.compose([
                  Validators.minLength(1),
                  Validators.maxLength(60),
                  Validators.required
                ])],

                preco: ['', Validators.compose([
                  Validators.minLength(1),
                  Validators.maxLength(10),
                  Validators.required
                ])]
              })
                
  }

  ionViewDidLoad() {

  }

  salvar() {
    
    //Abre tela de aguarde
    let loading = this.utilService.showLoading();
    loading.present();

    this.produtoService.adicionar(this.form.value).then((response)=>{
      //Fecha a tela de aguarde
      loading.dismiss();

      this.utilService.showAlert("Operação realizada com sucesso!");
      this.navCtrl.pop();

    }).catch((response)=>{
      loading.dismiss();
      
    });

  }

  cancelar() {
    this.navCtrl.pop();
  }

}
