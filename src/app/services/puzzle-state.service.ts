import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PuzzleStateService {
  private puzzles = ['a', 'b', 'c', 'd', 'e'];
  private currentPuzzleIdx = 0;

  currentPuzzle$ = new Subject<string>();
  puzzleProgress$ = this.currentPuzzle$.pipe(
    map(() => {
      return Array(this.numberOfPuzzles)
        .fill(false)
        .fill(true, 0, this.currentPuzzleIdx + 1);
    })
  );

  constructor(private router: Router) {
    this.activePuzzle = this.puzzles[0];
  }

  set activePuzzle(puzzId: string) {
    const newIndex = Math.max(
      this.puzzles.findIndex(puzzleId => puzzleId === puzzId),
      0
    );

    this.currentPuzzleIdx = newIndex;
    this.currentPuzzle$.next(this.activePuzzle);
  }

  get activePuzzle(): string {
    return this.puzzles[this.currentPuzzleIdx];
  }

  get numberOfPuzzles(): number {
    return this.puzzles.length;
  }

  solveCurrentPuzzle() {
    if (this.currentPuzzleIdx !== this.numberOfPuzzles - 1) {
      this.currentPuzzleIdx++;
      this.router.navigateByUrl(this.activePuzzle);
    } else {
      this.router.navigateByUrl('win');
    }
  }
}
