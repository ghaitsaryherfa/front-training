import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';


@Component({
  templateUrl: 'penyakit-detail.html',
})
export class PenyakitDetailsPage {
  item;

  constructor(params: NavParams) {
    this.item = params.data.item;
  }
}