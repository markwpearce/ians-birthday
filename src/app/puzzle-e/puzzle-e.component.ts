import { Component, OnInit } from '@angular/core';
import { PuzzleStateService } from '../services/puzzle-state.service';
import { PuzzleBase } from '../models/puzzle-base';

@Component({
  selector: 'app-puzzle-e',
  templateUrl: './puzzle-e.component.html',
  styleUrls: ['./puzzle-e.component.scss']
})
export class PuzzleEComponent extends PuzzleBase {
  constructor(puzzleState: PuzzleStateService) {
    super(puzzleState);
    this.setPuzzle('e');
    this.alternatePasswords = ['lock'];
  }
}
