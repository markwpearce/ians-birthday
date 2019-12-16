import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-scene-img',
  templateUrl: './scene-img.component.html',
  styleUrls: ['./scene-img.component.scss']
})
export class SceneImgComponent implements OnInit, AfterViewInit {
  @Input() name: string;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    (document.querySelector(
      '.fill'
    ) as HTMLElement).style.backgroundImage = `url("assets/scene/${this.fileName}")`;
  }

  get fileName(): string {
    return this.name.toLowerCase() + '.jpg';
  }
}
