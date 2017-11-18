import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ModalController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  mapTitle="";
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
      this.mapTitle="Map";
  }
  openDirectionModal() {
    let directionModal = this.modalCtrl.create('DirectionPage');
    directionModal.present();
 }

}
