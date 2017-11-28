import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  overview = [];
  constructor(private http: Http, public navCtrl: NavController) {
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
}
