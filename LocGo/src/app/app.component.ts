import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SearchPage } from '../pages/search/search';
import { MapPage } from '../pages/map/map';
import { AboutPage } from '../pages/about/about';
import { HelpPage } from '../pages/help/help';

//These are the side Menu components
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

//initial app opens up to SearchPage
  rootPage: any = SearchPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // Items here gets added to side menu bar
    // used for an example of ngFor and navigation
    this.pages = [
      //The Difficult part is how to add 2+ columns of checkboxes to modify map...we may need to reconsider design on this openPage
      //From research of what I did, I did not find any good directions/tutorials to do what I was looking for
      { title: 'Go to a new location', component: SearchPage },
      { title: 'Map', component: MapPage},
      { title: 'About Us', component: AboutPage},
      { title: 'Help', component: HelpPage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario, sources says back button would be of poor UI design
    this.nav.setRoot(page.component);
  }
}
