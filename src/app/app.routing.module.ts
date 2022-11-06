import {RouterModule, Routes} from "@angular/router";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {MainLayoutComponent} from "./layouts";


const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: 'episodes', loadChildren: () => import('./modules/episode/episode.module').then(value => value.EpisodeModule)},
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
