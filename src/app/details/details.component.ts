import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes, Router } from '@angular/router';
import { FormsModule }          from '@angular/forms';
// import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { ServiceWorkerModule } from '@angular/service-worker';
import { YoutubeService } from '../youtube.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  video: any;
  constructor(
    private youTubeService: YoutubeService,
    private router: Router) { }

  ngOnInit() {
    this.video;
  }

}
