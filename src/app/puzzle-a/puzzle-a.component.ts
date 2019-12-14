import { Component, OnInit } from '@angular/core';
import { PuzzleStateService } from '../services/puzzle-state.service';

@Component({
  selector: 'app-puzzle-a',
  templateUrl: './puzzle-a.component.html',
  styleUrls: ['./puzzle-a.component.scss']
})
export class PuzzleAComponent implements OnInit {
  stage = 0;

  constructor(private puzzleState: PuzzleStateService) {}

  ngOnInit() {
    this.puzzleState.activePuzzleId = 'a';
    this.stage = 0;
  }

  testInput(directions: string) {
    const jumps = directions
      .split(/[ ,]+/)
      .filter(num => num.trim().length > 0)
      .map(num => parseInt(num, 10));

    const possible1 = [25, 40, 15, 7, 22];
    const possible2 = [25, 27, 40, 15, 7, 22];
    if (jumps.toString() === possible1.toString() || jumps.toString() === possible2.toString()) {
      this.puzzleState.triggerCorrectAnswer();

      this.stage++;
    } else {
      this.puzzleState.triggerWrongAnswer();
    }
  }

  testCode(code: string) {
    if (code.trim().toLowerCase() === 'painting') {
      this.puzzleState.triggerCorrectAnswer();
      this.puzzleState.solveCurrentPuzzle();
    } else {
      this.puzzleState.triggerWrongAnswer();
    }
  }
}
