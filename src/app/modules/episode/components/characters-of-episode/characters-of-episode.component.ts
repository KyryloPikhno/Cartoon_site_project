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
  array:ICharacter[]

  @Input()
  currentEpisode: IEpisode;

  constructor(private episodeService: EpisodeService) {
  }

  ngOnInit(): void {

    this.currentEpisode.characters.map(url => {
      this.id = +url.split('/')[5]
      this.episodeService.getCharactersById(this.id).subscribe(value => {
        this.characters.push(value)
        console.log(this.characters);

      })
    });

    // this.currentEpisode.characters.map(url => {
    //   this.id = +url.split('/')[5]
    // });


    // this.currentEpisode.characters.map(url=>{
   //    let id = url.split('/')[5]
   //    this.episodeService.getCharactersById(id).subscribe(value =>{
   //      this.array.push(value)
   //       this.characters = this.array
   //       console.log(this.characters);


        // this.characters.map(value=> this.res = value)
        // console.log(this.res);
    //   })
    // })
  }
}
