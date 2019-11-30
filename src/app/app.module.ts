import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlideComponent } from './slide/slide.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { GetStartedSlideComponent } from './get-started-slide/get-started-slide.component';
import { Routes, RouterModule } from '@angular/router';
import { SessionComponent } from './session/session.component';

const appRoutes: Routes = [
  { path: 'question', component: SlideComponent },
  { path: 'question-pending', component: GetStartedSlideComponent },
  { path: '', component: SessionComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SlideComponent,
    ProgressBarComponent,
    GetStartedSlideComponent,
    SessionComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
