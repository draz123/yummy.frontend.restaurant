import { Component } from '@angular/core';

/**
 * Generated class for the UserPanelComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'user-panel',
  templateUrl: 'user-panel.html'
})
export class UserPanelComponent {

  text: string;

  constructor() {
    console.log('Hello UserPanelComponent Component');
    this.text = 'Hello World';
  }

}
