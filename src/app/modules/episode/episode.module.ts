import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EpisodeDetailsComponent } from './components/episode-details/episode-details.component';
import { EpisodeRoutingModule } from './episode-routing.module';
import { EpisodesComponent } from './components/episodes/episodes.component';
import { EpisodeComponent } from './components/episode/episode.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {EpisodeService} from "./services";
import {CharacterModule} from "../character/character.module";
import { CharacterComponent } from './components/character/character.component';
import { CharactersOfEpisodeComponent } from './components/characters-of-episode/characters-of-episode.component';
import { CharacterOfEpisodeComponent } from './components/character-of-episode/character-of-episode.component';


@NgModule({
  declarations: [
    EpisodeComponent,
    EpisodeDetailsComponent,
    EpisodesComponent,

    CharacterComponent,
    CharactersOfEpisodeComponent,
    CharacterOfEpisodeComponent
  ],
  exports: [
    EpisodeComponent,
    EpisodesComponent
  ],
  imports: [
    CommonModule,
    EpisodeRoutingModule,
    MatCardModule,
    MatButtonModule,
    CharacterModule
  ],
  providers:[
    EpisodeService
  ]
})
export class EpisodeModule { }
