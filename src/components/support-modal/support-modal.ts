import { Component } from '@angular/core';

/**
 * Generated class for the SupportModalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'support-modal',
  templateUrl: 'support-modal.html'
})
export class SupportModalComponent {

  text: string;

  constructor() {
    console.log('Hello SupportModalComponent Component');
    this.text = 'Hello World';
  }

}
