import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BannerComponent } from './landing-page/banner/banner.component';
import { NewsComponent } from './landing-page/news/news.component';
import { ProCretifcateComponent } from './landing-page/pro-cretifcate/pro-cretifcate.component';
import { InfoComponent } from './landing-page/info/info.component';
import { EventsComponent } from './landing-page/events/events.component';
import { TrainingComponent } from './landing-page/training/training.component';
import { MembershipComponent } from './landing-page/membership/membership.component';
import { HeaderComponent } from './landing-page/header/header.component';
import { FooterComponent } from './landing-page/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    BannerComponent,
    NewsComponent,
    ProCretifcateComponent,
    InfoComponent,
    EventsComponent,
    TrainingComponent,
    MembershipComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
