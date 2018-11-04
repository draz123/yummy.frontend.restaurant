
import {map} from 'rxjs/operators';
import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { Observable } from 'rxjs';

@Component({
  selector: "summary-chart",
  templateUrl: "summary-chart.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SummaryChartComponent {
  @Input() label: string;
  @Input() progress$: Observable<number>;
  progressArray$: Observable<string[]>;

  constructor() {}

  ngOnInit() {
    this.progressArray$ = this.progress$.pipe(
      map((progress: number) => new Array(progress)));
  }
}
