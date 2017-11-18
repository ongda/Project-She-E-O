import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { MapPage } from '../map/map';
import { BuildingsPage } from '../buildings/buildings';



@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  buildNameF="";
  buildNameS="";
  
  constructor(public navCtrl: NavController, public modalCtrl : ModalController) {
    this.buildNameS = "Select Initial Building";
    this.buildNameF = "Select Destination Building";
  }

  goToMapPage(){
    this.navCtrl.push(MapPage); //function calls to let pushing button get us to Map Page
  }

  openBuildingsModalS(button) {
    let buildingModalS = this.modalCtrl.create('BuildingsPage');
    buildingModalS.onDidDismiss(data => {
      //on modal close, retreive data & set button text to it
      if(data!=null)this.buildNameS=data.toString();;
    });
    buildingModalS.present();
 }

 openBuildingsModalF(button) {
   let buildingModalF = this.modalCtrl.create('BuildingsPage');
   //on modal close, retreive data & set button text to it
   buildingModalF.onDidDismiss(data => {
     if(data!=null)this.buildNameF=data.toString();
   });
   buildingModalF.present();
}

}
