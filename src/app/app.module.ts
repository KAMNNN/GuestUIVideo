import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetstartedComponent } from './getstarted/getstarted.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { SmallerHeaderComponent } from './smaller-header/smaller-header.component';

@NgModule({
  declarations: [
    AppComponent,
    GetstartedComponent,
    ProgressBarComponent,
    SmallerHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
