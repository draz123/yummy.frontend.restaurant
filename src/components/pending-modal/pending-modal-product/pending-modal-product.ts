import { Component, Input } from '@angular/core';
import { PendingSingleItem } from '../../../core/models/pending';

@Component({
  selector: 'pending-modal-product',
  templateUrl: 'pending-modal-product.html'
})
export class PendingModalProductComponent {

  @Input() product: PendingSingleItem;

  constructor() {}

}
