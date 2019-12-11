import { Component, OnInit } from '@angular/core';
import { PuzzleStateService } from '../services/puzzle-state.service';

@Component({
  selector: 'app-puzzle-a',
  templateUrl: './puzzle-a.component.html',
  styleUrls: ['./puzzle-a.component.scss']
})
export class PuzzleAComponent implements OnInit {
  constructor(private puzzleState: PuzzleStateService) {}

  ngOnInit() {
    this.puzzleState.activePuzzle = 'a';
  }
}
