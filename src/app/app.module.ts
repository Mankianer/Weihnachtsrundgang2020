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
import { Station1v2Component } from './stations/station1v2/station1v2.component';
import { Station1v4Component } from './stations/station1v4/station1v4.component';
import { Station1v3Component } from './stations/station1v3/station1v3.component';
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
    Station1v2Component,
    Station1v4Component,
    Station1v3Component,
    VisitorCounterComponent,
    ErklaerungComponent,
    InhaltDirective,
    InhaltComponent,
    ErklaerungNavigationComponent,
    ErklaerungScannenComponent,
    AktuelleStationComponent
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
