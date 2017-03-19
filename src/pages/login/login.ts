import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire } from 'angularfire2';

import { HomePage } from '../home/home';

import firebase from 'firebase';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  fireauth = firebase.auth();
  email: any;
  password: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    this.fireauth.signInWithEmailAndPassword(this.email, this.password).then((res) => {
      this.navCtrl.setRoot(HomePage);
    }).catch((err) => {
      alert('Login Failed' + err);
    })
  }

}
