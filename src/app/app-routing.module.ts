import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PuzzleAComponent } from './puzzle-a/puzzle-a.component';

const routes: Routes = [
  {
    path: 'a',
    component: PuzzleAComponent
  },
  {
    path: '',
    redirectTo: '/a',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
