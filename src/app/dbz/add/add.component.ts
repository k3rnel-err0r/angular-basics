import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Character } from '../interfaces/dbz.interface';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'
})
export class AddComponent {

  @Input() public newCharacter: Character = {} as Character;

  // @Output() public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public constructor(private dbzService: DbzService) {}

  public add(): void {
    if (this.newCharacter.name.trim().length === 0) { return; }

    // this.onNewCharacter.emit(this.newCharacter);
    this.dbzService.addCharacter(this.newCharacter);
    this.newCharacter = { name: '', power: 0 };
  }
}
