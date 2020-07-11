import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryFeedComponent } from './story-feed.component';
import { HackernewsApiService } from 'src/app/services/hackernews-api.service';
import { StoryFeedItemComponent } from '../story-feed-item/story-feed-item.component';

describe('StoryFeedComponent', () => {
  let component: StoryFeedComponent;
  let fixture: ComponentFixture<StoryFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryFeedComponent, StoryFeedItemComponent ],
      providers: [HackernewsApiService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
});
