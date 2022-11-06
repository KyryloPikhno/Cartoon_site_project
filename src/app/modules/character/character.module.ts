import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterRoutingModule } from './character-routing.module';
import { CharactersComponent } from './components/characters/characters.component';
import { CharacterComponent } from './components/character/character.component';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import {MatCardModule} from "@angular/material/card";
import {CharacterService} from "./services";


@NgModule({
  declarations: [
    CharactersComponent,
    CharacterComponent,
    CharacterDetailsComponent
  ],
    imports: [
        CommonModule,
        CharacterRoutingModule,
        MatCardModule,

    ],
  exports: [
    CharactersComponent
  ],
  providers: [
    CharacterService
  ]
})
export class CharacterModule { }
