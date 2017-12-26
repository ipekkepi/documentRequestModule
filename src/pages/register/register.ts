import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { DocumentRequestPage } from '../document-request/document-request';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,  public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  registerPage() {
    let loader = this.loadingCtrl.create({
      content: "Kaydınız Yapılıyor...",
      duration: 3000
    });

    loader.onDidDismiss(()=>{
      this.goToDetails();
    });


    loader.present();
    //this.showAlert();

  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'İşlem Başarılı!',
      subTitle: 'Kaydınız Başarılı Bir Şekilde Gerçekleştirilmiştir.',
      buttons: ['Tamam']
    });
    alert.present();

    

  }
  
  

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }

  goToDetails() {
    this.navCtrl.push(DocumentRequestPage);
  }

}
