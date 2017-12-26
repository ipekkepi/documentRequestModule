import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { DocumentRequestPage } from '../document-request/document-request';
import { RegisterPage } from '../register/register';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  loginPage() {
    let loader = this.loadingCtrl.create({
      content: "Giriş Yapılıyor...",
      duration: 3000
    });

    loader.onDidDismiss(()=>{
      this.goToDetails();
    });

    loader.present();

  }
  registerPage() {
    this.navCtrl.push(RegisterPage);
  }
  goToDetails() {
    this.navCtrl.push(DocumentRequestPage);
  }

}
