import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {RouterModule} from '@angular/router';
import { ContentControllerComponent } from './content-controller/content-controller.component';
import {CookieService} from 'ngx-cookie-service';
import { RewardComponent } from './reward/reward.component';
import { Station1Component } from './stations/station1/station1.component';
import { MapComponent } from './map/map.component';
import { DevComponent } from './dev/dev.component';
import {MatBadgeModule} from '@angular/material/badge';
import {MatGridListModule} from '@angular/material/grid-list';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {NgxAudioPlayerModule} from 'ngx-audio-player';
import { VisitorCounterComponent } from './visitor-counter/visitor-counter.component';
import {HttpClientModule} from '@angular/common/http';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import { ErklaerungComponent } from './erklaerung/erklaerung.component';
import { InhaltDirective } from './erklaerung/inhalt/inhalt.directive';
import {InhaltComponent} from './erklaerung/inhalt/inhalt.component';
import {ErklaerungNavigationComponent} from './erklaerung/inhalt/erklaerung_navigation.component';
import {ErklaerungScannenComponent} from './erklaerung/inhalt/erklaerung_scannen.component';
import { AktuelleStationComponent } from './aktuelle-station/aktuelle-station.component';
import { Station2Component } from './stations/station2/station2.component';
import { Station3Component } from './stations/station3/station3.component';
import { Station4Component } from './stations/station4/station4.component';
import { Station5Component } from './stations/station5/station5.component';
import { Station6Component } from './stations/station6/station6.component';
import { Station7Component } from './stations/station7/station7.component';
import { Station8Component } from './stations/station8/station8.component';
import { FaqComponent } from './faq/faq.component';
import {LandingPage2Component} from './landing-page/landing-page2.component';
import {NavItemComponent} from './navigation/nav-item.component';
import {Station2v1Component} from './stations/station2/station2v1.component';
import {Station3v1Component} from './stations/station3/station3v1.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ContentControllerComponent,
    RewardComponent,
    Station1Component,
    MapComponent,
    DevComponent,
    LandingPageComponent,
    VisitorCounterComponent,
    ErklaerungComponent,
    InhaltDirective,
    InhaltComponent,
    ErklaerungNavigationComponent,
    ErklaerungScannenComponent,
    AktuelleStationComponent,
    Station2Component,
    Station2v1Component,
    Station3Component,
    Station3v1Component,
    Station4Component,
    Station5Component,
    Station6Component,
    Station7Component,
    Station8Component,
    FaqComponent,
    LandingPage2Component,
    NavItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule,
    MatBadgeModule,
    MatGridListModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    NgxAudioPlayerModule,
    HttpClientModule,
    MatExpansionModule,
    MatCardModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
