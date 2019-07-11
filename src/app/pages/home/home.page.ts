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

  public facebookUserId: string;
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
    this.facebookUserId = '100589447929593';

    this.getFacebookUserData();
    this.getFacebookUserFriends();
  }

  /***********************************************************
   * API CALLS
   ***********************************************************/

  getFacebookUserData() {
    this.facebook.api(`/${this.facebookUserId}/`, []).then(
      (userDataResponse) => {
        console.log('userDataResponse');
        console.log(userDataResponse);

        alert(userDataResponse);
      },
      (userDataError) => {
        console.log('userDataError');
        console.log(userDataError);

        alert(userDataError);
      }
    );
  }

  getFacebookUserFriends() {
    this.facebook.api(`/${this.facebookUserId}/friends`, []).then(
      (userFriendsResponse) => {
        console.log('userFriendsResponse');
        console.log(userFriendsResponse);

        alert(userFriendsResponse);
      },
      (userFriendsError) => {
        console.log('userFriendsError');
        console.log(userFriendsError);

        alert(userFriendsError);
      }
    );
  }

}
