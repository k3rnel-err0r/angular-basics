import { Component } from '@angular/core';

import { Character } from '../interfaces/dbz.interface';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  public newCharacter: Character = {
    name: 'Roshi',
    power: 60000
  };

  // public add(event: SubmitEvent): void {
  //   event.preventDefault();
  //   console.log(event);
  // }

  public constructor(private dbzService: DbzService) { }
}
