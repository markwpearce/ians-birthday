import { Component, OnInit } from '@angular/core';
import { PuzzleStateService } from '../services/puzzle-state.service';
import { PuzzleBase } from '../models/puzzle-base';

@Component({
  selector: 'app-puzzle-f',
  templateUrl: './puzzle-f.component.html',
  styleUrls: ['./puzzle-f.component.scss']
})
export class PuzzleFComponent extends PuzzleBase {
  constructor(puzzleState: PuzzleStateService) {
    super(puzzleState);
    this.setPuzzle('f');
    this.possible1 = [4, 9, 5];
    this.possible2 = [495];
  }
}
