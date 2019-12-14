import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

export interface PuzzleDetail {
  id: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class PuzzleStateService {
  private puzzles: PuzzleDetail[] = [
    { id: 'start', name: '' },
    { id: 'a', name: 'Let’s Go To The Mouseum' },
    { id: 'b', name: 'Cheesy Night' },
    { id: 'c', name: 'What To Wear?' },
    { id: 'd', name: 'On The Chase' },
    { id: 'e', name: 'Heavy Construction' },
    { id: 'f', name: 'Secret Codes' },
    { id: 'g', name: 'Trapped' },
    { id: 'end', name: 'Crunchrat Caught' }
  ];
  private currentPuzzleIdx = 0;

  currentPuzzle$ = new Subject<PuzzleDetail>();

  wrongAnswer$ = new Subject<null>();
  correctAnswer$ = new Subject<null>();

  puzzleProgress$ = this.currentPuzzle$.pipe(
    map(() => {
      return Array(this.numberOfPuzzles - 1)
        .fill(false)
        .fill(true, 0, this.currentPuzzleIdx);
    })
  );

  constructor(private router: Router) {
    this.activePuzzleId = this.puzzles[0].id;
  }

  set activePuzzleId(puzzId: string) {
    const newIndex = Math.max(
      this.puzzles.findIndex(puzzle => puzzle.id === puzzId),
      0
    );

    this.currentPuzzleIdx = newIndex;
    this.currentPuzzle$.next(this.activePuzzle);
  }

  get activePuzzleId(): string {
    return this.activePuzzle.id;
  }

  get activePuzzle(): PuzzleDetail {
    return this.puzzles[this.currentPuzzleIdx];
  }

  get numberOfPuzzles(): number {
    return this.puzzles.length - 1;
  }

  solveCurrentPuzzle() {
    if (this.currentPuzzleIdx !== this.numberOfPuzzles - 1) {
      this.currentPuzzleIdx++;
      this.router.navigateByUrl(this.activePuzzleId);
    } else {
      this.router.navigateByUrl('win');
    }
  }

  triggerWrongAnswer() {
    this.wrongAnswer$.next();
  }

  triggerCorrectAnswer() {
    this.correctAnswer$.next();
  }
}
