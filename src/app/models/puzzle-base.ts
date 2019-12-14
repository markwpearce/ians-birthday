import { PuzzleStateService, PuzzleDetail } from '../services/puzzle-state.service';
import { OnInit } from '@angular/core';

export class PuzzleBase implements OnInit {
  stage = 0;
  code: string;
  puzzleData: PuzzleDetail;
  possible1: number[];
  possible2: number[];

  constructor(protected puzzleState: PuzzleStateService) {}

  protected setPuzzle(puzzId: string) {
    this.puzzleState.activePuzzleId = puzzId;
    this.puzzleData = this.puzzleState.activePuzzle;
  }

  ngOnInit() {
    this.stage = 0;
  }

  nextStage() {
    this.stage++;
  }

  testInput(directions: string) {
    const jumps = directions
      .split(/[ ,]+/)
      .filter(num => num.trim().length > 0)
      .map(num => parseInt(num, 10));

    if (
      jumps.toString() === this.possible1.toString() ||
      (this.possible2 && jumps.toString() === this.possible2.toString())
    ) {
      this.puzzleState.triggerCorrectAnswer();
      this.nextStage();
    } else {
      this.puzzleState.triggerWrongAnswer();
    }
  }

  testCode(code: string) {
    if (code.trim().toLowerCase() === this.puzzleData.code) {
      this.puzzleState.triggerCorrectAnswer();
      this.puzzleState.solveCurrentPuzzle();
    } else {
      this.puzzleState.triggerWrongAnswer();
    }
  }
}
