import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { HackernewsApiService } from 'src/app/services/hackernews-api.service';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
@Component({
  selector: 'app-story-feed-item',
  templateUrl: './story-feed-item.component.html',
  styleUrls: ['./story-feed-item.component.scss']
})
export class StoryFeedItemComponent implements OnInit, OnChanges {
  @Input() feed: any;
  constructor(private _api: HackernewsApiService,) { }

  ngOnInit() {
    this.feed = this._api.getLocalStorage();
    TimeAgo.addLocale(en)
    const timeAgo = new TimeAgo('en-US')
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.feed = this._api.getLocalStorage();
  }

  hide(objectID) {
    this.feed.hits = this.feed.hits.filter((i) => {
      return i.objectID != objectID;
    })
  }

  public getTime(date) {
    return  new TimeAgo('en-US').format(date - 60 * 1000)
  }
  public rowEvenOdd(index) {
    return (index % 2 == 0)
  }
  public getDomainName(url) {
    if (url) {
      var arr = url.split("/");
      return arr[2];
    }
  }
}
