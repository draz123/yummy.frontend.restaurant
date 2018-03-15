import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'container-header',
  templateUrl: 'container-header.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContainerHeaderComponent {

  @Input() title: string;

  constructor() {
    this.title = "";
  }

}
