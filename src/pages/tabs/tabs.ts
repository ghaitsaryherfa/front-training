import { Component } from '@angular/core';

import { QuesionerPage } from '../quesioner/quesioner';
import { PenyakitPage } from '../penyakit/penyakit';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = QuesionerPage;
  tab3Root = PenyakitPage;

  constructor() {

  }
}
