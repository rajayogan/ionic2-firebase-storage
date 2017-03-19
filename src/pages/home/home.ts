import { Component, NgZone } from '@angular/core';

import { NavController } from 'ionic-angular';

import { FileChooser, FilePath, File } from 'ionic-native';

import firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  nativepath: any;
  firestore = firebase.storage();
  imgsource: any;
  constructor(public navCtrl: NavController, public zone: NgZone) {
    
  }

  store() {
    FileChooser.open().then((url) => {
      (<any>window).FilePath.resolveNativePath(url, (result) => {
        this.nativepath = result;
        this.uploadimage();
      }
      )
    })
  }

  uploadimage() {
    (<any>window).resolveLocalFileSystemURL(this.nativepath, (res) => {
      res.file((resFile) => {
        var reader = new FileReader();
        reader.readAsArrayBuffer(resFile);
        reader.onloadend = (evt: any) => {
          var imgBlob = new Blob([evt.target.result], { type: 'image/jpeg' });
          var imageStore = this.firestore.ref().child('image');
          imageStore.put(imgBlob).then((res) => {
            alert('Upload Success');
          }).catch((err) => {
            alert('Upload Failed' + err);
          })
        }
      })
    })
  }

  display() {
    this.firestore.ref().child('image').getDownloadURL().then((url) => {
      this.zone.run(() => {
        this.imgsource = url;
       })
    })
  }

}
