import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PuzzleAComponent } from './puzzle-a/puzzle-a.component';
import { PuzzleStartComponent } from './puzzle-start/puzzle-start.component';
import { PuzzleBComponent } from './puzzle-b/puzzle-b.component';
import { PuzzleCComponent } from './puzzle-c/puzzle-c.component';
import { PuzzleDComponent } from './puzzle-d/puzzle-d.component';
import { PuzzleEComponent } from './puzzle-e/puzzle-e.component';
import { PuzzleFComponent } from './puzzle-f/puzzle-f.component';
import { PuzzleGComponent } from './puzzle-g/puzzle-g.component';
import { PuzzleEndComponent } from './puzzle-end/puzzle-end.component';

const routes: Routes = [
  {
    path: 'start',
    component: PuzzleStartComponent
  },
  {
    path: 'a',
    component: PuzzleAComponent
  },
  {
    path: 'b',
    component: PuzzleBComponent
  },
  {
    path: 'c',
    component: PuzzleCComponent
  },
  {
    path: 'd',
    component: PuzzleDComponent
  },
  {
    path: 'e',
    component: PuzzleEComponent
  },
  {
    path: 'f',
    component: PuzzleFComponent
  },
  {
    path: 'g',
    component: PuzzleGComponent
  },
  {
    path: 'end',
    component: PuzzleEndComponent
  },
  {
    path: '',
    redirectTo: '/start',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
