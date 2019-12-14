import { Component, OnInit } from '@angular/core';
import { PuzzleStateService } from '../services/puzzle-state.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-puzzle-start',
  templateUrl: './puzzle-start.component.html',
  styleUrls: ['./puzzle-start.component.scss']
})
export class PuzzleStartComponent implements OnInit {
  constructor(private puzzleState: PuzzleStateService) {}

  ngOnInit() {
    this.puzzleState.activePuzzleId = 'start';
  }

  goToNext() {
    this.puzzleState.solveCurrentPuzzle();
  }
}
