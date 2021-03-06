import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlotlyViaWindowModule } from 'angular-plotly.js';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, PlotlyViaWindowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
