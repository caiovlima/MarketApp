import { Injectable } from "@angular/core";
import { LoadingController, ToastController, AlertController } from 'ionic-angular';

@Injectable()
export class UtilService{
    
    constructor(public loadController: LoadingController,
                public toastCtrl : ToastController,
                public alertCtrl : AlertController) {

    }

    public obterHostDaApi(): string {
        return "http://localhost:3000/";
    }

    public showLoading(message : string = "Processando...") : any{
        let loading = this.loadController.create({
            content : message
        });

        return loading;
    }

    public showToast(message: string, position: string = 'top'): any{
        let toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position : position
        });
        toast.present();
    }

    public showAlertCallBack(message: string, title: string = "Atenção", callback){
        let alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons:[{
                text : 'OK',
                handler: callback
            }]
        });
        alert.present();
    }

    public isJson(json: string): boolean{
        try{
            JSON.parse(json);
        }catch(e){
            return false;
        }

        return true;
    }

    public efetuarLogoff(){
        localStorage.clear();
    }

    public showAlert(message: string, title: string = "Atenção") {
        let alert = this.alertCtrl.create({
          title: title,
          subTitle: message,
          buttons: ['OK']
        });
        alert.present();
      }

    
}