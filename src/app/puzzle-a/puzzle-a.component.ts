import { Component, OnInit } from '@angular/core';
import { PuzzleStateService } from '../services/puzzle-state.service';
import { PuzzleBase } from '../models/puzzle-base';

@Component({
  selector: 'app-puzzle-a',
  templateUrl: './puzzle-a.component.html',
  styleUrls: ['./puzzle-a.component.scss']
})
export class PuzzleAComponent extends PuzzleBase {
  constructor(puzzleState: PuzzleStateService) {
    super(puzzleState);
    this.setPuzzle('a');
    this.possible1 = [25, 40, 15, 7, 22];
    this.possible2 = [25, 27, 40, 15, 7, 22];
  }
}
