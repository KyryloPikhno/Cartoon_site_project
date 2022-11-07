import {Component, Input, OnInit} from '@angular/core';
import {ICharacter} from "../../interfaces";

@Component({
  selector: 'app-character-of-episode',
  templateUrl: './character-of-episode.component.html',
  styleUrls: ['./character-of-episode.component.css']
})
export class CharacterOfEpisodeComponent implements OnInit {
  @Input()
  character:ICharacter

  constructor() {


  }

  ngOnInit(): void {

  }

}
