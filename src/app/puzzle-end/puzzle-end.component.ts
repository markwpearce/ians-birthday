import { Component, OnInit } from '@angular/core';
import { PuzzleBase } from '../models/puzzle-base';
import { PuzzleStateService } from '../services/puzzle-state.service';

@Component({
  selector: 'app-puzzle-end',
  templateUrl: './puzzle-end.component.html',
  styleUrls: ['./puzzle-end.component.scss']
})
export class PuzzleEndComponent extends PuzzleBase {
  constructor(puzzleState: PuzzleStateService) {
    super(puzzleState);
    this.setPuzzle('end');
  }
}
