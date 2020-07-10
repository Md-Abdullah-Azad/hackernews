import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { map, mergeMap, tap, switchMap, flatMap, filter, retry } from 'rxjs/operators';
import { forkJoin, Observable } from 'rxjs';
import { combineLatest } from 'rxjs';
import { from } from 'rxjs';
import { merge } from 'rxjs';

@Injectable()
export class HackernewsApiService {
  private cacheFeed: string[];
  private cacheFeedSize: number;
  constructor(private _api: Http) {}

  getNewsByPageNo(pageNo){
    return this._api
      .get(`https://hn.algolia.com/api/v1/search?page=` + pageNo)
      .pipe(retry(3))
      .pipe(map(data => data.json()))
      .pipe(tap(data => (
        (this.cacheFeed = data), 
        (this.cacheFeedSize = data.length),
        (this.setLocalStorage(data))
      )));
  }

  setLocalStorage(data){
    localStorage.setItem('dataSource', JSON.stringify(data))
  }
  getLocalStorage(){
    return JSON.parse( localStorage.getItem('dataSource') );
  }
}
