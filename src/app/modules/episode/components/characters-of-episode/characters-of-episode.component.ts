import {ICharacter,  IEpisode} from "../../interfaces";
import {Component, Input, OnInit} from '@angular/core';

import {EpisodeService} from "../../services";


@Component({
  selector: 'app-characters-of-episode',
  templateUrl: './characters-of-episode.component.html',
  styleUrls: ['./characters-of-episode.component.css']
})
export class CharactersOfEpisodeComponent implements OnInit {
  id:number
  character: ICharacter
  characters = new Array<ICharacter>();

  @Input()
  currentEpisode: IEpisode;

  constructor(private episodeService: EpisodeService) {
  }

  ngOnInit(): void {

    this.currentEpisode.characters.map(url=>{
      let res = url.split('/')[5]
      this.episodeService.getCharactersById(res).subscribe(value =>{
      this.characters.push(value)
      // this.ar = this.characters
      })
    })
  }
}
