import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.component';
import { CoreModule } from './core/core.module';
import { ChapterModule } from './chapter/chapter.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    SharedModule,
    CoreModule,
    ChapterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// To do  : check for multi lingual