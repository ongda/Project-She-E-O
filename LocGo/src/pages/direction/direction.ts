import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the DirectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-direction',
  templateUrl: 'direction.html',
})
export class DirectionPage {

  directions: Array<string>; //declare array of strings (each index will holds instruction)
  constructor(public navCtrl: NavController, public navParams: NavParams, public ViewCtrl: ViewController) {
    this.directions=["run"+"\njump"+"\nlive"];//initially there are no directions
  }

  public closeModal(){
    this.ViewCtrl.dismiss();
  }

}
