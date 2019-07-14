// Angular
import { Component } from '@angular/core';
import { Router } from '@angular/router';

// Ionic
import { Platform } from '@ionic/angular';

// Native
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Facebook } from '@ionic-native/facebook/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  /***********************************************************
   * CONSTRUCTOR
   ***********************************************************/

  constructor(
    private router: Router,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private facebook: Facebook
  ) {
    this.initializeApp();
  }

  /***********************************************************
   * INITIALIZE
   ***********************************************************/

  initializeApp() {
    this.platform.ready().then(() => {
      this.checkFacebookLoginStatus();

      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  checkFacebookLoginStatus() {
    this.facebook.getLoginStatus().then(
      (loginStatusResponse) => {
        if (loginStatusResponse && loginStatusResponse.status === 'connected') {
          this.router.navigate(['/home']);
        }
        else {
          this.router.navigate(['/start']);
        }
      },
      (loginStatusError) => {
        this.router.navigate(['/start']);
      }
    );
  }

  logout() {
    this.facebook.logout().then(
      (logoutResponse) => {
        console.log('logoutResponse');
        console.log(logoutResponse);

        alert('logoutResponse');
        alert(logoutResponse);

        this.router.navigate(['/start']);
      },
      (logoutError) => {
        console.log('logoutError');
        console.log(logoutError);

        alert('logoutError');
        alert(logoutError);
      }
    );
  }

}
