import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HackernewsApiService } from '../../services/hackernews-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';
import * as c3 from 'c3';

@Component({
  selector: 'app-story-feed',
  templateUrl: './story-feed.component.html',
  styleUrls: ['./story-feed.component.scss']
})
export class StoryFeedComponent implements OnInit {
  private subscription: any;
  public grabbingFeed: boolean;
  public pagination: boolean;
  public page;
  public feedType: string;
  public feed: Array<string>;
  public totalPages: number;
  objectIDCollection: any;
  pointsCollection: any;
  constructor(
    private cdRef: ChangeDetectorRef,
    private _api: HackernewsApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.grabbingFeed = true;
    this.feedType = this.route.snapshot.data.feed;
    this.pagination = false;
    this.subscription = this.route.queryParams
      .pipe(
        switchMap(params => {
          this.grabbingFeed = true;
          this.feed = [];
          this.page = params.p || 1;
          return this._api.getNewsByPageNo(this.page);
        })
      )
      .subscribe(
        data => {
          this.feed.push(data);
          this.totalPages = data.nbPages;
          this.pagination = true;
          this.grabbingFeed = false;
          this.objectIDCollection = data.hits.map(({ objectID }) => objectID);
          this.pointsCollection = data.hits.map(({ points }) => points);
          this.generateChart();
          this.cdRef.detectChanges();
        },
        error => console.log(error)
      );
  }

  generateChart() {
    let chart = c3.generate({
    bindto: '#chart',
        data: {
            x: 'ID',
            columns: [
              ['ID', ...this.objectIDCollection],
              ['Votes', ...this.pointsCollection]
            ]
        },
        axis: {
          x: {
              type: 'category',
              tick: {
                  rotate: 90,
                  multiline: false
              },
              height: 150
          }
      }
    });
}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  nextPage() {
    this.router.navigate([`/${this.feedType}`], {
      queryParams: {
        p: Math.min(this.totalPages, parseInt(this.page) + 1)
      }
    });
  }

  prevPage() {
    this.router.navigate([`/${this.feedType}`], {
      queryParams: {
        p: Math.max(1, parseInt(this.page) - 1)
      }
    });
  }

}
