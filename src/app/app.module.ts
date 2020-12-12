import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { WeihnachtsnavigationComponent } from './weihnachtsnavigation/weihnachtsnavigation.component';
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
import { Station2Component } from './stations/station2/station2.component';
import { Station3Component } from './stations/station3/station3.component';
import { Station4Component } from './stations/station4/station4.component';
import { Station5Component } from './stations/station5/station5.component';
import { Station6Component } from './stations/station6/station6.component';
import { Station7Component } from './stations/station7/station7.component';
import { Station8Component } from './stations/station8/station8.component';
import { MapComponent } from './map/map.component';
import { DevComponent } from './dev/dev.component';
import {MatBadgeModule} from '@angular/material/badge';
import {MatGridListModule} from '@angular/material/grid-list';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { Station2v2Component } from './stations/station2v2/station2v2.component';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { Station2v3Component } from './stations/station2v3/station2v3.component';
import { Station3v2Component } from './stations/station3v2/station3v2.component';
import { Station3v3Component } from './stations/station3v3/station3v3.component';
import { Station4v2Component } from './stations/station4v2/station4v2.component';
import { Station7v2Component } from './stations/station7v2/station7v2.component';
import { Station7v3Component } from './stations/station7v3/station7v3.component';
import {NgxAudioPlayerModule} from 'ngx-audio-player';
import { Station1v2Component } from './stations/station1v2/station1v2.component';
import { Station1v4Component } from './stations/station1v4/station1v4.component';
import { Station1v3Component } from './stations/station1v3/station1v3.component';
import { Station4v3Component } from './stations/station4v3/station4v3.component';
import { Station8v2Component } from './stations/station8v2/station8v2.component';
import { Station8v3Component } from './stations/station8v3/station8v3.component';
import { Station8v4Component } from './stations/station8v4/station8v4.component';
import { Station6v2Component } from './stations/station6v2/station6v2.component';
import { Station1v5Component } from './stations/station1v5/station1v5.component';
import { Station5v5Component } from './stations/station5v5/station5v5.component';
import { VisitorCounterComponent } from './visitor-counter/visitor-counter.component';
import {HttpClientModule} from '@angular/common/http';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    WeihnachtsnavigationComponent,
    ContentControllerComponent,
    RewardComponent,
    Station1Component,
    Station2Component,
    Station3Component,
    Station4Component,
    Station5Component,
    Station6Component,
    Station7Component,
    Station8Component,
    MapComponent,
    DevComponent,
    LandingPageComponent,
    Station2v2Component,
    Station2v3Component,
    Station3v2Component,
    Station3v3Component,
    Station4v2Component,
    Station7v2Component,
    Station7v3Component,
    Station1v2Component,
    Station1v4Component,
    Station1v3Component,
    Station4v3Component,
    Station8v2Component,
    Station8v3Component,
    Station8v4Component,
    Station6v2Component,
    Station1v5Component,
    Station5v5Component,
    VisitorCounterComponent
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
    MatExpansionModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
