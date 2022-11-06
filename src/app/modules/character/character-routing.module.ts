import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import {CharactersComponent} from "./components/characters/characters.component";


const routes: Routes = [
  {
    path: 'info/:id', component: CharactersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterRoutingModule { }
