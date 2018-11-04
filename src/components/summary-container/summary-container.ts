import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { format } from 'date-fns';

@Component({
  selector: 'summary-container',
  templateUrl: 'summary-container.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SummaryContainerComponent {
  public date: string = format(new Date(), 'DD-MM-YYYY');

  constructor() {}

}
