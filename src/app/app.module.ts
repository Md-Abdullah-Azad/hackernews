import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { StoryFeedComponent } from './components/story-feed/story-feed.component';
import { StoryFeedItemComponent } from './components/story-feed-item/story-feed-item.component';
import { HackernewsApiService } from './services/hackernews-api.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    StoryFeedComponent,
    StoryFeedItemComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, HttpModule],
  providers: [HackernewsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
