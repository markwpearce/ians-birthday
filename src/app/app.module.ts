import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PuzzleAComponent } from './puzzle-a/puzzle-a.component';
import { HeaderComponent } from './header/header.component';
import { PuzzleHeaderComponent } from './puzzle-header/puzzle-header.component';
import { CharacterImgComponent } from './character-img/character-img.component';
import { PuzzleProgressComponent } from './puzzle-progress/puzzle-progress.component';
import { PuzzleStartComponent } from './puzzle-start/puzzle-start.component';
import { NextButtonComponent } from './next-button/next-button.component';
import { SceneImgComponent } from './scene-img/scene-img.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    PuzzleAComponent,
    HeaderComponent,
    PuzzleHeaderComponent,
    CharacterImgComponent,
    PuzzleProgressComponent,
    PuzzleStartComponent,
    NextButtonComponent,
    SceneImgComponent
  ],
  imports: [BrowserModule, AppRoutingModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [PuzzleAComponent],
  entryComponents: [PuzzleAComponent]
})
export class AppModule {}
