import { Component, OnInit } from '@angular/core';
import { PuzzleStateService } from '../services/puzzle-state.service';
import { PuzzleBase } from '../models/puzzle-base';

@Component({
  selector: 'app-puzzle-b',
  templateUrl: './puzzle-b.component.html',
  styleUrls: ['./puzzle-b.component.scss']
})
export class PuzzleBComponent extends PuzzleBase {
  constructor(puzzleState: PuzzleStateService) {
    super(puzzleState);
    this.setPuzzle('b');
  }
}
