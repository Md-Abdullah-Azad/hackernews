import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { HackernewsApiService } from 'src/app/services/hackernews-api.service';
@Component({
  selector: 'app-story-feed-item',
  templateUrl: './story-feed-item.component.html',
  styleUrls: ['./story-feed-item.component.scss']
})
export class StoryFeedItemComponent implements OnInit, OnChanges {
  @Input() feed: any;

  constructor(private _api: HackernewsApiService,) {}

  ngOnInit() {
    this.feed = this._api.getLocalStorage();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.feed = this._api.getLocalStorage();
  }

  hide(objectID) {
    this.feed.hits = this.feed.hits.filter((i) => {
      return i.objectID != objectID;
    })
  }
}
