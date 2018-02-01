import { Component } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  overview = [];
  constructor(public actionsheetCtrl: ActionSheetController, private http: Http, public navCtrl: NavController) {
    this.getDataOverview();
  }
  getDataOverview(){
    this.http.get("assets/jsonfile/overview.json")
    .map(res => res.json())
    .subscribe(data => 
      {
        this.overview=data;
      }, err => console.log(err));
  }
  openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'About Us',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Dibuat oleh',
          // role: 'destructive',
          // icon: 'person',
          handler: () => {
            // console.log('Delete clicked');
          }
        },
        {
          text: 'Ghaitsa Ryherfa',
          icon: 'person',
          handler: () => {
            // console.log('Share clicked');
          }
        },
        // {
        //   text: 'Rizky Maulana',
        //   icon: 'person',
        //   handler: () => {
        //     // console.log('Share clicked');
        //   }
        // },
        // {
        //   text: 'Sopyan Mulyana',
        //   icon: 'person',
        //   handler: () => {
        //     // console.log('Share clicked');
        //   }
        // },
        {
          text: 'Didukung oleh',
          // role: 'destructive',
          // icon: 'person',
          handler: () => {
            // console.log('Delete clicked');
          }
        },
        {
          text: 'dr. H. Muhammad Amin',
          icon: 'person',
          handler: () => {
            // console.log('Share clicked');
          }
        },
        {
          text: 'Back',
          role: 'cancel', // will always sort to be on the bottom
          icon: 'close',
          handler: () => {
            // console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
}
