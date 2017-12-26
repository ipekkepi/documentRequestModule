import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomeworksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-homeworks',
  templateUrl: 'homeworks.html',
})
export class HomeworksPage {

  items = [
    'Diferansiyel Denklemler',
    'Elektrik Elektronik Devreler',
    'İstatistik ve Olasılık',
    'Mobil Uygulama Geliştirme',
    'Teknik İngilizce I',
    'Veri Yapıları Laboratuvarı',
    'Veri Yapıları ve Algortimalar',
    'YARATICI DRAMA',
    'Yönetim ve Organizasyon'
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeworksPage');
  }

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }

}
