import { Component, OnInit, ViewChild } from '@angular/core';
import { PuzzleStateService } from '../services/puzzle-state.service';
import { PuzzleBase } from '../models/puzzle-base';
import { RobotMazeComponent } from '../robot-maze/robot-maze.component';

@Component({
  selector: 'app-puzzle-g',
  templateUrl: './puzzle-g.component.html',
  styleUrls: ['./puzzle-g.component.scss']
})
export class PuzzleGComponent extends PuzzleBase {
  @ViewChild('maze', { static: false })
  robotMaze: RobotMazeComponent;
  disableButton = false;

  constructor(puzzleState: PuzzleStateService) {
    super(puzzleState);
    this.setPuzzle('g');
    this.alternatePasswords = ['caught', 'catch'];
  }

  testInput(directions: string) {
    if (this.disableButton) {
      return;
    }
    const jumps = directions.split(/[ ,]+/).filter(num => num.trim().length > 0);
    this.robotMaze.reset();
    this.robotMaze.programRobot(jumps);
    this.disableButton = true;
  }

  resetMaze() {
    if (this.disableButton) {
      return;
    }
    this.robotMaze.reset();
  }

  mazeResult(worked: boolean) {
    this.disableButton = false;
    if (worked) {
      this.puzzleState.triggerCorrectAnswer();
      this.nextStage();
    } else {
      this.puzzleState.triggerWrongAnswer();
      setTimeout(() => {
        this.robotMaze.reset();
      }, 2000);
    }
  }
}
