import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { Facebook } from '@ionic-native/facebook/ngx';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {

  public allowLogin: boolean = true;
  public facebookUser: any;
  public facebookUserFriends: any;

  /***********************************************************
   * CONSTRUCTOR
   ***********************************************************/

  constructor(
    private alertController: AlertController,
    private storage: Storage,
    private facebook: Facebook
  ) { }

  /***********************************************************
   * LIFECYCLE HOOKS
   ***********************************************************/

  ngOnInit() {

  }

  /***********************************************************
   * ACTIONS
   ***********************************************************/

  async presentInfoAlert(alertHeader: string, alertSubheader: string, alertMessage: string) {
    const infoAlert = await this.alertController.create({
      header: alertHeader,
      subHeader: alertSubheader,
      message: alertMessage,
      buttons: ['Ok']
    });

    await infoAlert.present();
  }

  /***********************************************************
   * API CALLS
   ***********************************************************/

  getFacebookLoginStatus() {
    this.facebook.getLoginStatus().then(
      (loginStatusResponse) => {
        alert('loginStatusResponse');
        alert(loginStatusResponse);

      },
      (loginStatusError) => {
        alert('loginStatusError');
        alert(loginStatusError);

      }
    );
  }

  loginWithFacebook() {
    this.allowLogin = false;

    this.facebook.login(['email', 'user_friends']).then(
      (loginResponse) => {
        alert('loginResponse');
        alert(loginResponse);

        if (loginResponse.status === 'connected') {
          alert('You are logged in');

        } else {
          alert('Status is not connected');

        }

        this.allowLogin = true;
      },
      (loginError) => {
        alert('loginError');
        alert(loginError);

        this.presentInfoAlert('Error', '', loginError);

        this.allowLogin = true;
      }
    );
  }

  getFacebookUserData() {

  }

  getFacebookUserFriends() {

  }

}
