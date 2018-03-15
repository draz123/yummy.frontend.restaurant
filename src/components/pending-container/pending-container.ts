import { Component } from '@angular/core';

/**
 * Generated class for the PendingContainerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'pending-container',
  templateUrl: 'pending-container.html'
})
export class PendingContainerComponent {

  text: string;

  constructor() {
    console.log('Hello PendingContainerComponent Component');
    this.text = 'Hello World';
  }

}
