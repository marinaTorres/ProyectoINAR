import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { infoService } from './info.service';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [infoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
