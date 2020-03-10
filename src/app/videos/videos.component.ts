import { Component } from '@angular/core';
import { Subject, from } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { YoutubeService } from '../youtube.service';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { NgxPaginationModule } from 'ngx-pagination';
@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent {
  youtubeChannel : string =  "Traversy Media";
  headElements = ['Thumb', 'Title', 'Publish Date', 'Details'];

  videos: any[];
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private spinner: NgxSpinnerService,
    private youTubeService: YoutubeService,
    private router: Router) { }

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
          this.videos.push(element);
          console.log(this.videos)
        }
      });
  };

   getVideo(video) {
    this.router.navigate(['/videos', video.id.videoId])
  }
}

