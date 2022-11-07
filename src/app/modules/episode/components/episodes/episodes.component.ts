import {Component, Input, OnInit} from '@angular/core';

import {EpisodeService} from "../../services";
import {IEpisodeResponse} from "../../interfaces";


@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {
  episodesCall: IEpisodeResponse;
  pages: number[];
  currentPage = 1;



  constructor(private episodeService:EpisodeService) { }

  ngOnInit(page=1): void {
    this.episodeService.getAll(page).subscribe(value => {
      this.currentPage = page
      this.episodesCall = value
    });
  }
}
