import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-next-button',
  templateUrl: './next-button.component.html',
  styleUrls: ['./next-button.component.scss']
})
export class NextButtonComponent implements OnInit {
  @Input()
  back = false;

  @Input()
  reset = false;

  constructor() {}

  ngOnInit() {}
}
