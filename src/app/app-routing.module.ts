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


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {path: '', component: LandingPageComponent},
      {path: 'reward', component: RewardComponent},
      {path: 'erklaerung', component: ErklaerungComponent},
      {path: 'station/1', component: Station1Component, canActivate: [StationguardGuard]},
      {path: 'station/1/2', component: Station1v2Component, canActivate: [StationguardGuard]},
      {path: 'station/1/3', component: Station1v3Component, canActivate: [StationguardGuard]},
      {path: 'station/1/4', component: Station1v4Component, canActivate: [StationguardGuard]},
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
