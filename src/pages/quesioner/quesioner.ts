import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-quesioner',
  templateUrl: 'quesioner.html'
})
export class QuesionerPage {
  notDemam:boolean = true;
  notMalaria:boolean = true;
  notCampak:boolean = true;
  notMuntah:boolean = true;
  notSeringMuntah:boolean = true;
  notDiare:boolean = true;
  notSembelit:boolean = true;
  notNapasCepat:boolean = true;
  notBerdahak:boolean = true;

  constructor(public navCtrl: NavController) {
    
  }
  
  setDemam(id){
    this.notDemam = (id == 1) ? false : true;
    console.log(this.notDemam);
  }
  setMalaria(id){
    this.notMalaria = (id == 1) ? false : true;
  }
  setCampak(id){
    this.notCampak = (id == 1) ? false : true;
  }
  setMuntah(id){
    this.notMuntah = (id == 1) ? false : true;
  }
  setSeringMuntah(id){
    this.notSeringMuntah = (id == 1) ? false : true;
  }
  setDiare(id){
    this.notDiare = (id == 1) ? false : true;
  }
  setSembelit(id){
    this.notSembelit = (id == 1) ? false : true;
  }
  setNapasCepat(id){
    this.notNapasCepat = (id == 1) ? false : true;
  }
  setBerdahak(id){
    this.notBerdahak = (id == 1) ? false : true;
  }
}
