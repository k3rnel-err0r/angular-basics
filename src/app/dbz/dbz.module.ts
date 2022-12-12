import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AddComponent } from './add/add.component';
import { CharactersComponent } from './characters/characters.component';
import { MainPageComponent } from './main-page/main-page.component';

import { DbzService } from './services/dbz.service';

@NgModule({
  declarations: [
    AddComponent,
    CharactersComponent,
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageComponent
  ],
  providers: [
    DbzService
  ]
})
export class DbzModule { }
