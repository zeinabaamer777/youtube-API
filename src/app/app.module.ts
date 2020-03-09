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
import { AppRoutingModule } from './app-routing.module';
import { VideosComponent } from './videos/videos.component';
import { DetailsComponent } from './details/details.component';
const appRoutes: Routes = [
  { path: '/details', component: DetailsComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    VideosComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    CommonModule,
    HttpClientModule,
    NgxSpinnerModule,
    RouterModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
