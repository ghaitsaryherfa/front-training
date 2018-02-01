import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { Http, Headers, RequestOptionsArgs } from '@angular/http';
import 'rxjs/add/operator/map';
import { PenyakitDetailsPage } from "./penyakit-detail";

@Component({
  selector: 'page-penyakit',
  templateUrl: 'penyakit.html'
})
export class PenyakitPage {
  penyakit;
  penyakitTemp;
  

  constructor(public actionsheetCtrl: ActionSheetController, public navCtrl: NavController, private http: Http, public navParams: NavParams) {
    
    this.getDataPenyakit();
  }
  getDataPenyakit(){
    //this.http.get("https://rumaji.azurewebsites.net/skripsi-getsa/api/penyakit/all")
    this.http.get("assets/jsonfile/penyakit.json")
    .map(res => res.json())
    .subscribe(data => 
      {
        this.penyakit=data.records;
        this.penyakitTemp=data.records;
      }, err => console.log(err));
  }
  getItems(ev) {
    // Reset items back to all of the items
    this.penyakit=this.penyakitTemp;;
    // set val to the value of the ev target
    var val = ev.target.value;
    // if the value is an empty string don't filter the items
    var that = this;
    if (val && val.trim() != '') {
      that.penyakit = this.penyakit.filter((item) => {
        return (item.nama_penyakit.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  openNavDetailsPage(item) {
    this.navCtrl.push(PenyakitDetailsPage, { item: item });
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
