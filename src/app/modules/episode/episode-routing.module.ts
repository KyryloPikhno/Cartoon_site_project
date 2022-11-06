import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import {EpisodesComponent} from "./components/episodes/episodes.component";


const routes: Routes = [
  {
    path:'', component: EpisodesComponent
      // {path: ':id/info', loadChildren: () => import('../../modules/character/character.module').then(value => value.CharacterModule)},
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EpisodeRoutingModule { }
