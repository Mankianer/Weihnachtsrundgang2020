import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ContentControllerComponent} from './content-controller/content-controller.component';
import {RewardComponent} from './reward/reward.component';
import {Station1Component} from './stations/station1/station1.component';
import {MapComponent} from './map/map.component';
import {StationguardGuard} from './stationguard.guard';
import {DevComponent} from './dev/dev.component';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {Station1v2Component} from './stations/station1v2/station1v2.component';
import {Station1v4Component} from './stations/station1v4/station1v4.component';
import {Station1v3Component} from './stations/station1v3/station1v3.component';
import {Station1v5Component} from './stations/station1v5/station1v5.component';
import {VisitorCounterComponent} from './visitor-counter/visitor-counter.component';
import {ErklaerungComponent} from './erklaerung/erklaerung.component';
import {AktuelleStationComponent} from './aktuelle-station/aktuelle-station.component';
import {Station2Component} from './stations/station2/station2.component';
import {Station3Component} from './stations/station3/station3.component';
import {Station4Component} from './stations/station4/station4.component';
import {Station5Component} from './stations/station5/station5.component';
import {Station6Component} from './stations/station6/station6.component';
import {Station7Component} from './stations/station7/station7.component';
import {Station8Component} from './stations/station8/station8.component';
import {FaqComponent} from './faq/faq.component';
import {LandingPage2Component} from './landing-page/landing-page2.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {path: '', component: LandingPageComponent},
      {path: 'reward', component: RewardComponent},
      {path: 'erklaerung', component: ErklaerungComponent},
      {path: 'station', component: ContentControllerComponent},
      {path: 'station/1', component: Station1Component, canActivate: [StationguardGuard]},
      {path: 'station/1/2', component: Station1v2Component, canActivate: [StationguardGuard]},
      {path: 'station/1/3', component: Station1v3Component, canActivate: [StationguardGuard]},
      {path: 'station/1/4', component: Station1v4Component, canActivate: [StationguardGuard]},
      {path: 'station/2', component: Station2Component, canActivate: [StationguardGuard]},
      {path: 'station/3', component: Station3Component, canActivate: [StationguardGuard]},
      {path: 'station/4', component: Station4Component, canActivate: [StationguardGuard]},
      {path: 'station/5', component: Station5Component, canActivate: [StationguardGuard]},
      {path: 'station/6', component: Station6Component, canActivate: [StationguardGuard]},
      {path: 'station/7', component: Station7Component, canActivate: [StationguardGuard]},
      {path: 'station/8', component: Station8Component, canActivate: [StationguardGuard]},
      {path: 'visitors', component: VisitorCounterComponent},
      {path: 'dev', component: DevComponent},
      {path: 'map', component: MapComponent},
      {path: 'aktuelleStation', component: AktuelleStationComponent},
      {path: 'landing', component: LandingPageComponent},
      {path: 'landing/2', component: LandingPage2Component},
      {path: 'QR/:id', component: ContentControllerComponent},
      {path: 'faq', component: FaqComponent}
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
