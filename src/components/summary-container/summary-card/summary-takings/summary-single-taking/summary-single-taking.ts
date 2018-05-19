import { Component, Input } from '@angular/core';
import { Takings } from '../../../../../core/models/takings';

@Component({
  selector: 'summary-single-taking',
  templateUrl: 'summary-single-taking.html'
})
export class SummarySingleTakingComponent {

  @Input() singleTaking: Takings;

  constructor() {}

}
