import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'container-subheader',
  templateUrl: 'container-subheader.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContainerSubheaderComponent {

  @Input() title: string;
  @Input() date: string;

  constructor() {
    this.title = '';
    this.date = '';
  }

}
