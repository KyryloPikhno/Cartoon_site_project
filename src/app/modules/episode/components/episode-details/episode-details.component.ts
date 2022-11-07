import {Component, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {EpisodeService} from "../../services";
import {IEpisode} from "../../interfaces";

@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.component.html',
  styleUrls: ['./episode-details.component.css']
})
export class EpisodeDetailsComponent implements OnInit {
  @Output()
  currentEpisode: IEpisode|null;



  constructor(private route: ActivatedRoute, private episodeService:EpisodeService) {
  }



  ngOnInit(): void {
    this.route.params.subscribe(({id})=>{
      this.episodeService.getById(id).subscribe(value=> this.currentEpisode = value)
    })
  }
}
