import { Component, OnInit } from '@angular/core';
import { PuzzleStateService } from '../services/puzzle-state.service';
import { PuzzleBase } from '../models/puzzle-base';

@Component({
  selector: 'app-puzzle-d',
  templateUrl: './puzzle-d.component.html',
  styleUrls: ['./puzzle-d.component.scss']
})
export class PuzzleDComponent extends PuzzleBase {
  constructor(puzzleState: PuzzleStateService) {
    super(puzzleState);
    this.setPuzzle('d');
    this.possible1 = [22, 7, 15, 40, 20, 26, 28, 17, 46];
    this.possible2 = [22, 7, 15, 40, 20, 26, 17, 46];
  }
}
