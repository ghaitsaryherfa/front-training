import { Component } from '@angular/core';
import { NavController, LoadingController, ActionSheetController } from 'ionic-angular';
import { Http, Headers, RequestOptionsArgs } from '@angular/http';
import { QuesionerService } from "../../services/quesioner.service";
import { UrlService } from "../../services/url.service";
import { HasilPage } from "./hasil";

import { ItemQuesioner, Jawaban} from "./item-quesioner";
import 'rxjs/add/operator/map';
import * as _ from 'lodash'; //lodash for edit array

//tambahan karena error post
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'page-quesioner',
  templateUrl: 'quesioner.html'
})
export class QuesionerPage {
  quesioner: any = [];
  answertemp: any=[];
  answertemp2: any=[];
  answer;
  itemQuesioner: ItemQuesioner[] = [];
  jawaban: Jawaban[] = [];
  result;
  hasil="test";
  headers = new Headers();
  opts: RequestOptionsArgs;
  berhasil: boolean=false;
  loading: boolean=true;

  constructor(public actionsheetCtrl: ActionSheetController, public navCtrl: NavController, private http: Http, public loadingCtrl: LoadingController, private quesionerService: QuesionerService, private urlService: UrlService) {
    this.headers.append("Content-Type", "application/json");
    this.headers.append("Charset", "UTF-8");
    // this.headers.append("access-control-allow-origin", "*");
    this.opts = { headers : this.headers };
    this.getDataQuesioner();
  }
  getDataQuesioner(){
    this.http.get("assets/jsonfile/quesioner.json")
    //this.http.get(this.urlService.getUrlPertanyaan())
    .map(res => res.json())
    .subscribe(data => 
      {
        if (!data.message){
          this.quesioner=data.records;
          this.berhasil=true;
          this.loading=false;
      }
        // console.log(this.quesioner);
      }, err => {
        console.log(err);
        this.loading=false;
      });
  }
  submitQuesioner(){
    // console.log(this.answertemp);
    this.answer = _.uniq(_.compact(_.pull(this.answertemp,"G00")));
    
    //this.temp = JSON.stringify(this.answer);
    //console.log(this.temp);
    
    this.answer.forEach(element => {
      this.itemQuesioner.push({kode_gejala : element});
    });
    this.jawaban.push({jawaban : this.itemQuesioner});

    
    this.navCtrl.push(HasilPage, {jawaban: this.jawaban});
    this.itemQuesioner=[];
    this.jawaban=[];
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
