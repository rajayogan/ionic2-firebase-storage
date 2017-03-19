import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

import { AngularFireModule } from 'angularfire2';

var config = {
    apiKey: "AIzaSyCEUM0GD7N_d3SmolB6RBX96CxMhIO0d8E",
    authDomain: "myapp-4eadd.firebaseapp.com",
    databaseURL: "https://myapp-4eadd.firebaseio.com",
    storageBucket: "myapp-4eadd.appspot.com",
    messagingSenderId: "493016366518"
  };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
