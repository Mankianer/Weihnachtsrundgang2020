import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
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
import {MapComponent} from './map/map.component';
import {StationguardGuard} from './stationguard.guard';
import {DevComponent} from './dev/dev.component';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {Station2v2Component} from './stations/station2v2/station2v2.component';
import {Station2v3Component} from './stations/station2v3/station2v3.component';
import {Station3v2Component} from './stations/station3v2/station3v2.component';
import {Station3v3Component} from './stations/station3v3/station3v3.component';
import {Station4v2Component} from './stations/station4v2/station4v2.component';
import {Station7v2Component} from './stations/station7v2/station7v2.component';
import {Station7v3Component} from './stations/station7v3/station7v3.component';
import {Station1v2Component} from './stations/station1v2/station1v2.component';
import {Station1v4Component} from './stations/station1v4/station1v4.component';
import {Station1v3Component} from './stations/station1v3/station1v3.component';
import {Station4v3Component} from './stations/station4v3/station4v3.component';
import {Station8v3Component} from './stations/station8v3/station8v3.component';
import {Station8v2Component} from './stations/station8v2/station8v2.component';
import {Station8v4Component} from './stations/station8v4/station8v4.component';
import {Station6v2Component} from './stations/station6v2/station6v2.component';
import {Station1v5Component} from './stations/station1v5/station1v5.component';
import {Station5v5Component} from './stations/station5v5/station5v5.component';
import {VisitorCounterComponent} from './visitor-counter/visitor-counter.component';
import {Station5v3Component} from './stations/station5v3/station5v3.component';
import {Station5v2Component} from './stations/station5v2/station5v2.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {path: '', component: LandingPageComponent},
      {path: 'reward', component: RewardComponent},
      {path: 'station/1', component: Station1Component, canActivate: [StationguardGuard]},
      {path: 'station/1/2', component: Station1v2Component, canActivate: [StationguardGuard]},
      {path: 'station/1/3', component: Station1v3Component, canActivate: [StationguardGuard]},
      {path: 'station/1/4', component: Station1v4Component, canActivate: [StationguardGuard]},
      {path: 'station/2', component: Station2Component, canActivate: [StationguardGuard]},
      {path: 'station/2/2', component: Station2v2Component, canActivate: [StationguardGuard]},
      {path: 'station/2/3', component: Station2v3Component, canActivate: [StationguardGuard]},
      {path: 'station/3', component: Station3Component, canActivate: [StationguardGuard]},
      {path: 'station/3/2', component: Station3v2Component, canActivate: [StationguardGuard]},
      {path: 'station/3/3', component: Station3v3Component, canActivate: [StationguardGuard]},
      {path: 'station/4', component: Station4Component, canActivate: [StationguardGuard]},
      {path: 'station/4/2', component: Station4v2Component, canActivate: [StationguardGuard]},
      {path: 'station/4/3', component: Station4v3Component, canActivate: [StationguardGuard]},
      {path: 'station/5', component: Station5Component, canActivate: [StationguardGuard]},
      {path: 'station/5/2', component: Station5v2Component, canActivate: [StationguardGuard]},
      {path: 'station/5/3', component: Station5v3Component, canActivate: [StationguardGuard]},
      {path: 'station/5/5', component: Station5v5Component, canActivate: [StationguardGuard]},
      {path: 'station/6', component: Station6Component, canActivate: [StationguardGuard]},
      {path: 'station/6/2', component: Station6v2Component, canActivate: [StationguardGuard]},
      {path: 'station/7', component: Station7Component, canActivate: [StationguardGuard]},
      {path: 'station/7/2', component: Station7v2Component, canActivate: [StationguardGuard]},
      {path: 'station/7/3', component: Station7v3Component, canActivate: [StationguardGuard]},
      {path: 'station/8', component: Station8Component, canActivate: [StationguardGuard]},
      {path: 'station/8/2', component: Station8v2Component, canActivate: [StationguardGuard]},
      {path: 'station/8/3', component: Station8v3Component, canActivate: [StationguardGuard]},
      {path: 'station/8/4', component: Station8v4Component, canActivate: [StationguardGuard]},
      {path: 'visitors', component: VisitorCounterComponent},
      {path: 'dev', component: DevComponent},
      {path: 'map', component: MapComponent},
      {path: 'landing', component: LandingPageComponent},
      {path: 'QR/:id', component: ContentControllerComponent},
      {path: '**', component: ContentControllerComponent}
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
