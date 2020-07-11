import { TestBed, inject, async } from '@angular/core/testing';

import { HackernewsApiService } from './hackernews-api.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

xdescribe('HackernewsApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule , HttpClientModule],
      providers: [HackernewsApiService]
    });
  });

  it('should be created', async(inject([HackernewsApiService], (service: HackernewsApiService) => {
    expect(service).toBeTruthy();
  })));
  
});
