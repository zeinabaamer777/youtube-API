import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { VideosComponent } from './videos/videos.component';
import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  { path: '',   redirectTo: '/videos', pathMatch: 'full' },
  { path: 'videos', component: VideosComponent },
  { path: 'videos/:id', component: DetailsComponent },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
