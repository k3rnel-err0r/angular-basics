import { Component, Input } from '@angular/core';

import { Character } from '../interfaces/dbz.interface';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html'
})
export class CharactersComponent {
  // @Input() public characters: Character[] = [];

  public get characters(): Character[] {
    return this.dbzService.characters;
  }

  public constructor( private dbzService: DbzService) {}
}
