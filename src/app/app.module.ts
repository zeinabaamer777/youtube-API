import { SafePipe } from './SafePipe ';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }          from '@angular/forms';
// import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { VideosComponent } from './videos/videos.component';
import { DetailsComponent } from './details/details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgxPaginationModule } from 'ngx-pagination';


// import {YouTubePlayerModule} from '@angular/youtube-player';

// const appRoutes: Routes = [
//   // { path: '/details', component: DetailsComponent }
// ];


@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    VideosComponent,
    SafePipe,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    CommonModule,
    HttpClientModule,
    NgxSpinnerModule,
    AppRoutingModule,
    RouterModule,
    // YouTubePlayerModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    NgxPaginationModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
