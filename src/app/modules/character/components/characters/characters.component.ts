import { Component, OnInit } from '@angular/core';

import {CharacterService} from "../../services";
import {ICharacterResponse} from "../../interfaces";


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  characterCall: ICharacterResponse;


  constructor(private characterService: CharacterService) {
  }

  ngOnInit(): void {
    this.characterService.getByEpisode().subscribe(value => {
      // this.currentPage = page
      this.characterCall = value
    });
  }
}
