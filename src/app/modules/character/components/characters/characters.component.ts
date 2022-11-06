import { Component, OnInit } from '@angular/core';

import {CharacterService} from "../../services";
import {ICharacter} from "../../interfaces";
import {Route} from "@angular/router";


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  characters:ICharacter[]

  constructor(private characterService: CharacterService, private route:Route) {
  }



  ngOnInit(): void {
    this.characterService.getByEpisode().subscribe(value => this.characters = value)
  }
}
