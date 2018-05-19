import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'yummy-button',
  templateUrl: 'yummy-button.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class YummyButtonComponent {
  
  @Input() icon: string;
  @Output() buttonClick: EventEmitter<void>;

  constructor() {
    this.buttonClick = new EventEmitter<void>();
  }

}
