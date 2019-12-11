import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-character-img',
  templateUrl: './character-img.component.html',
  styleUrls: ['./character-img.component.scss']
})
export class CharacterImgComponent implements OnInit {
  @Input() name: string;
  @Input() flip: boolean;
  @Input() size: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' = 'medium';
  @Input() faded: boolean;

  constructor() {}

  ngOnInit() {}

  get fileName(): string {
    return this.name.toLowerCase() + '.png';
  }
}
