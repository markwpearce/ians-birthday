import { Component, OnInit } from '@angular/core';
import { PuzzleStateService, PuzzleDetail } from '../services/puzzle-state.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-puzzle-header',
  templateUrl: './puzzle-header.component.html',
  styleUrls: ['./puzzle-header.component.scss']
})
export class PuzzleHeaderComponent implements OnInit {
  currentPuzzle$: Observable<PuzzleDetail>;

  constructor(private puzzleStateService: PuzzleStateService) {
    this.currentPuzzle$ = this.puzzleStateService.currentPuzzle$;
  }

  ngOnInit() {}
}
