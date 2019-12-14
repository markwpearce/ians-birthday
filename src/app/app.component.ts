import { Component } from '@angular/core';
import { PuzzleStateService } from './services/puzzle-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ians-birthday';

  hideWrongAnswer = true;
  hideRightAnswer = true;
  constructor(private puzzleState: PuzzleStateService) {
    this.puzzleState.wrongAnswer$.subscribe(() => {
      this.hideWrongAnswer = false;
      this.playSound('failure');
      setTimeout(() => (this.hideWrongAnswer = true), 2000);
    });

    this.puzzleState.correctAnswer$.subscribe(() => {
      this.hideRightAnswer = false;
      this.playSound('success');
      setTimeout(() => (this.hideRightAnswer = true), 2000);
    });
  }

  playSound(sound: string) {
    const audio = new Audio();
    audio.src = `/assets/sound/${sound}.wav`;
    audio.load();
    audio.play();
  }
}
