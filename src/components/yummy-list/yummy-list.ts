import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'yummy-list',
  templateUrl: 'yummy-list.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class YummyListComponent {

  @Input() items: Observable<any[]>;
  @Input() isFetching: Observable<boolean>;

  constructor() {}

  ngOnInit(): void {}

}
