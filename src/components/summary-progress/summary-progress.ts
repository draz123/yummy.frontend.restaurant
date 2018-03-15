import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'summary-progress',
  templateUrl: 'summary-progress.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SummaryProgressComponent {

  @Input() label: string;
  @Input() progress: number;

  constructor() {}

}
