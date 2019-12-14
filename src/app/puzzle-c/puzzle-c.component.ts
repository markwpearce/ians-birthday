import { Component, OnInit } from '@angular/core';
import { PuzzleStateService } from '../services/puzzle-state.service';
import { PuzzleBase } from '../models/puzzle-base';

@Component({
  selector: 'app-puzzle-c',
  templateUrl: './puzzle-c.component.html',
  styleUrls: ['./puzzle-c.component.scss']
})
export class PuzzleCComponent extends PuzzleBase {
  constructor(puzzleState: PuzzleStateService) {
    super(puzzleState);
    this.setPuzzle('c');
  }
}
