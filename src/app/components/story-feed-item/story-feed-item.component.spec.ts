import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryFeedItemComponent } from './story-feed-item.component';
import { HackernewsApiService } from 'src/app/services/hackernews-api.service';

describe('StoryFeedItemComponent', () => {
  let component: StoryFeedItemComponent;
  let fixture: ComponentFixture<StoryFeedItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryFeedItemComponent ],
      providers: [HackernewsApiService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryFeedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
