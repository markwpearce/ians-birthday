import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PuzzleAComponent } from './puzzle-a/puzzle-a.component';
import { PuzzleStartComponent } from './puzzle-start/puzzle-start.component';

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
