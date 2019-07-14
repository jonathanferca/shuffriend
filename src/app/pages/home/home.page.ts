// Angular
import { Component, OnInit } from '@angular/core';

// Native
import { Facebook } from '@ionic-native/facebook/ngx';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public facebookUser: object;
  public facebookFriends: Array<any>;

  /***********************************************************
   * CONSTRUCTOR
   ***********************************************************/

  constructor(
    private facebook: Facebook
  ) { }

  /***********************************************************
   * LIFECYCLE HOOKS
   ***********************************************************/

  ngOnInit() {
    this.getFacebookUserData();
    this.getFacebookUserFriends();
  }

  /***********************************************************
   * ACTIONS
   ***********************************************************/

  inviteFriends() {
    alert('I will invite friends');
  }

  beSocial() {
    alert('I will be social');
  }

  /***********************************************************
   * API CALLS
   ***********************************************************/

  getFacebookUserData() {
    this.facebook.api('/me/?fields=id,name,email,picture', []).then(
      (userDataResponse) => {
        console.log('userDataResponse');
        console.log(userDataResponse);

        alert(userDataResponse);

        this.facebookUser = userDataResponse;
      },
      (userDataError) => {
        console.log('userDataError');
        console.log(userDataError);

        alert(userDataError);
      }
    );
  }

  getFacebookUserFriends() {
    this.facebook.api('/me/friends', []).then(
      (userFriendsResponse) => {
        console.log('userFriendsResponse');
        console.log(userFriendsResponse);

        alert(userFriendsResponse);

        this.facebookFriends = userFriendsResponse.data;
      },
      (userFriendsError) => {
        console.log('userFriendsError');
        console.log(userFriendsError);

        alert(userFriendsError);
      }
    );
  }

}
