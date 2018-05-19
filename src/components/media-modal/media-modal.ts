import { Component } from '@angular/core';

/**
 * Generated class for the MediaModalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'media-modal',
  templateUrl: 'media-modal.html'
})
export class MediaModalComponent {

  text: string;

  constructor() {
    console.log('Hello MediaModalComponent Component');
    this.text = 'Hello World';
  }

}
