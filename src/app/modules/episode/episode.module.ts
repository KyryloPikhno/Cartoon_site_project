import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EpisodeDetailsComponent } from './components/episode-details/episode-details.component';
import { EpisodeRoutingModule } from './episode-routing.module';
import { EpisodesComponent } from './components/episodes/episodes.component';
import { EpisodeComponent } from './components/episode/episode.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {EpisodeService} from "./services";


@NgModule({
  declarations: [
    EpisodeComponent,
    EpisodeDetailsComponent,
    EpisodesComponent
  ],
  exports: [
    EpisodeComponent,
    EpisodesComponent
  ],
  imports: [
    CommonModule,
    EpisodeRoutingModule,
    MatCardModule,
    MatButtonModule
  ],
  providers:[
    EpisodeService
  ]
})
export class EpisodeModule { }
