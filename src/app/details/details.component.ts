import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit, Component, ViewChild, ElementRef } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes, Router ,ActivatedRoute} from '@angular/router';
import { FormsModule }          from '@angular/forms';
// import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { ServiceWorkerModule } from '@angular/service-worker';
import { YoutubeService } from '../youtube.service';
import {DomSanitizer} from "@angular/platform-browser";


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  video: any;
  html: any;
  // @ViewChild("tref", {read: typeof ElementRef, static: true || false}) tref: ElementRef;
  srcurl: any;
  contentDetails: any;
  snippet: any;
  statistics: any;

  constructor(
    private youTubeService: YoutubeService,
    private router: Router,
    private route: ActivatedRoute,
    private domSanitizer : DomSanitizer
    ) { }

    gotoHeroes() {
      this.router.navigate(['/videos']);
    }

  ngOnInit() {

    this.video= [];
      this.route.paramMap.subscribe(params => {
        console.log(params.get('id'));
         this.youTubeService.getSingleVideoDisplayed(params.get('id')).subscribe(c =>{
            console.log("c" , c);
             this.video = c;
            // this.id = this.video.items[0].id;
            this.snippet = this.video.items[0].snippet;
            this.statistics = this.video.items[0].statistics;
            this.contentDetails = this.video.items[0].contentDetails;
            this.srcurl = this.domSanitizer.bypassSecurityTrustResourceUrl('http://www.youtube.com/embed/'+this.video.items[0].id);
        })
        });
    }
  }
