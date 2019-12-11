import { Component, OnInit } from '@angular/core';
import { PuzzleStateService } from '../services/puzzle-state.service';

@Component({
  selector: 'app-puzzle-progress',
  templateUrl: './puzzle-progress.component.html',
  styleUrls: ['./puzzle-progress.component.scss']
})
export class PuzzleProgressComponent implements OnInit {
  puzzleProgress$ = this.puzzleState.puzzleProgress$;

  constructor(private puzzleState: PuzzleStateService) {}

  ngOnInit() {}
}
