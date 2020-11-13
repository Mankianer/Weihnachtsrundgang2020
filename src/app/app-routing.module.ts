import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ContentControllerComponent} from './content-controller/content-controller.component';
import {RewardComponent} from './reward/reward.component';
import {Station1Component} from './stations/station1/station1.component';
import {Station2Component} from './stations/station2/station2.component';
import {Station3Component} from './stations/station3/station3.component';
import {Station4Component} from './stations/station4/station4.component';
import {Station5Component} from './stations/station5/station5.component';
import {Station6Component} from './stations/station6/station6.component';
import {Station7Component} from './stations/station7/station7.component';
import {Station8Component} from './stations/station8/station8.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: '', component: ContentControllerComponent },
      { path: 'reward', component: RewardComponent },
      { path: 'station/1', component: Station1Component },
      { path: 'station/2', component: Station2Component },
      { path: 'station/3', component: Station3Component },
      { path: 'station/4', component: Station4Component },
      { path: 'station/5', component: Station5Component },
      { path: 'station/6', component: Station6Component },
      { path: 'station/7', component: Station7Component },
      { path: 'station/8', component: Station8Component },
      { path: 'QR/:id', component: ContentControllerComponent }
    ])
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }