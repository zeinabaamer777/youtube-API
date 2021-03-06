import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { DomSanitizer } from '@angular/platform-browser';



@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  apiKey : string = 'AIzaSyCPFuJxCkjBxJMfxaoniJd4iM86ojSAgmM';

  constructor(public http: HttpClient) {}

  getVideosForChanel(channel, maxResults): Observable<Object> {
    let url = 'https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&channelId=' + channel + '&order=date&part=snippet &type=video,id&maxResults=' + maxResults
    return this.http.get(url)
      .pipe(map((res) => {
        console.log(res);
        return res;
      }))
  }

  // https://www.googleapis.com/youtube/v3/videos?part=player&id='videoId'&key='+ this.apiKey

  getSingleVideoDisplayed(id: any): Observable<object>{
    // let vUrl = 'https://www.youtube.com/watch?v='+id;

    let vUrl = 'https://www.googleapis.com/youtube/v3/videos/?part=snippet,contentDetails,statistics&id='+id+'&key='+ this.apiKey;
      return this.http.get(vUrl)
   }

  }
