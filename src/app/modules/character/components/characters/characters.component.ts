import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {ICharacterResponse, ICurrentEpisode} from "../../interfaces";
import {CharacterService} from "../../services";


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  characterCall: ICharacterResponse;
  id:string|null
  currentEpisode:ICurrentEpisode


  constructor(private characterService: CharacterService, private route:ActivatedRoute) {
  }

  ngOnInit(): void {
    this.characterService.getByEpisode().subscribe(value => {


      // this.currentPage = page
      this.characterCall = value
    });

    this.id = this.route.snapshot.paramMap.get('id')

    if(this.id) {
      this.characterService.currentEpisode(this.id).subscribe(value => {
        this.currentEpisode = value
      })
    }
    console.log(this.id)
    console.log(this.currentEpisode)
  }
}
