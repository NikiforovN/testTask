import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InfoHotelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info-hotel',
  templateUrl: 'info-hotel.html',
})
export class InfoHotelPage {
  selectedHotel;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedHotel = this.navParams.data
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoHotelPage');
    this.selectedHotel = this.navParams.data;
  }

}
