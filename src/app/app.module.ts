import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PuzzleAComponent } from './puzzle-a/puzzle-a.component';
import { HeaderComponent } from './header/header.component';
import { PuzzleHeaderComponent } from './puzzle-header/puzzle-header.component';
import { CharacterImgComponent } from './character-img/character-img.component';
import { PuzzleProgressComponent } from './puzzle-progress/puzzle-progress.component';

@NgModule({
  declarations: [
    AppComponent,
    PuzzleAComponent,
    HeaderComponent,
    PuzzleHeaderComponent,
    CharacterImgComponent,
    PuzzleProgressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [PuzzleAComponent],
  entryComponents: [PuzzleAComponent]
})
export class AppModule { }
