import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoryFeedComponent } from './components/story-feed/story-feed.component';

const routes: Routes = [
  { path: 'topstories', data: { feed: 'topstories' }, component: StoryFeedComponent },
  { path: '', redirectTo: 'topstories', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
