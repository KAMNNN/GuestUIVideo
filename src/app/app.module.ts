import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlideComponent } from './slide/slide.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { GetStartedSlideComponent } from './get-started-slide/get-started-slide.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: SlideComponent },
  { path: 'get-started',      component: GetStartedSlideComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SlideComponent,
    ProgressBarComponent,
    GetStartedSlideComponent
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
