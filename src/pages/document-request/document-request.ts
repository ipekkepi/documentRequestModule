import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the DocumentRequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-document-request',
  templateUrl: 'document-request.html',
})
 

export class DocumentRequestPage {



  items = [
    'Öğrenci Belgesi',
    'Transkript',
    'Harç Belgesi',
    'Geçici Mezuniyet Belgesi',
    
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DocumentRequestPage');
  }

  documentRequest() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });

    loader.onDidDismiss(()=>{
      this.showAlert();
    });

    loader.present();
    //this.showAlert();

  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'İşlem Başarılı!',
      subTitle: 'Yeni belge isteğiniz gönderilmiştir.',
      buttons: ['Tamam']
    });
    alert.present();
  }
  
  itemSelected(item: string) {
    console.log("Selected Item", item);
  }

}
