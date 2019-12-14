import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';

const WALL = 1;
const GOAL = 2;

export interface Point {
  x: number;
  y: number;
}

@Component({
  selector: 'app-robot-maze',
  templateUrl: './robot-maze.component.html',
  styleUrls: ['./robot-maze.component.scss']
})
export class RobotMazeComponent implements OnInit {
  @Input()
  maze: number[][] = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 2, 0, 1, 0],
    [0, 0, 0, 0, 1, 0],
    [1, 1, 1, 1, 1, 0],
    [0, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
  ];
  @Input()
  start: Point = { x: 5, y: 9 };

  @Output()
  programResult = new EventEmitter<boolean>();

  robot: Point = this.start;

  currentDirection = 0;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {}

  turnLeft() {
    this.currentDirection = (this.currentDirection + 3) % 4;
  }

  turnRight() {
    this.currentDirection = (this.currentDirection + 1) % 4;
  }

  reset() {
    this.robot = this.start;

    this.currentDirection = 0;
  }

  programRobot(instructions: string[]): void {
    let ok = true;

    const op = instructions.shift();
    if (op === 'L' || op === 'l') {
      this.turnLeft();
    }
    if (op === 'R' || op === 'r') {
      this.turnRight();
    } else {
      const spaces = parseInt(op, 10);
      if (!isNaN(spaces)) {
        ok = this.move(spaces);
      }
    }
    this.cdr.markForCheck();
    if (ok) {
      if (this.maze[this.robot.y][this.robot.x] === GOAL) {
        this.programResult.next(ok);
      } else if (instructions.length > 0) {
        setTimeout(() => {
          this.programRobot(instructions);
        }, 1000);
      }
    } else {
      this.programResult.next(false);
    }
  }

  move(spaces: number): boolean {
    let ok = true;
    while (spaces > 0) {
      ok = this.move1();
      if (!ok) {
        break;
      }
      spaces--;
    }
    return ok;
  }

  move1(): boolean {
    switch (this.currentDirection) {
      case 0: {
        this.robot = { ...this.robot, y: this.robot.y - 1 };
        break;
      }
      case 1: {
        this.robot = { ...this.robot, x: this.robot.x + 1 };
        break;
      }
      case 2: {
        this.robot = { ...this.robot, y: this.robot.y + 1 };
        break;
      }
      case 3: {
        this.robot = { ...this.robot, x: this.robot.x - 1 };
        break;
      }
    }
    if (this.robot.y < 0 || this.robot.y > this.maze.length) {
      return false;
    }
    if (this.robot.x < 0 || this.robot.x > this.maze[0].length) {
      return false;
    }
    if (this.maze[this.robot.y][this.robot.x] === WALL) {
      return false;
    }
    return true;
  }
}
