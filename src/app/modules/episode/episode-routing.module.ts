import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import {EpisodeDetailsComponent} from "./components/episode-details/episode-details.component";
import {EpisodesComponent} from "./components/episodes/episodes.component";


const routes: Routes = [
  {
    path:'', component: EpisodesComponent, children:[
      {path:':id', component: EpisodeDetailsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EpisodeRoutingModule { }
