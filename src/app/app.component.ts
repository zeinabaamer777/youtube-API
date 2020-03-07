import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { YoutubeService } from './youtube.service';
import { takeUntil } from 'rxjs/operators';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  youtubeChannel : string =  "Traversy Media"; 
  headElements = ['Thumb', 'Title', 'Publish Date', 'Details'];
  videos: any[];
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private spinner: NgxSpinnerService, private youTubeService: YoutubeService) { }
 
  ngOnInit() {
    this.spinner.show()
    setTimeout(()=>
    {
      this.spinner.hide()
    },3000)
    this.videos = [];
    this.youTubeService
      .getVideosForChanel('UC29ju8bIPH5as8OGnQzwJyA', 30)
      .pipe(takeUntil(this.destroy$))
      .subscribe(lista => {
        for (let element of lista["items"]) {
          this.videos.push(element)
        }
      });
  }
}