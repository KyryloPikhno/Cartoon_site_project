import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IEpisode, IEpisodeResponse} from "../interfaces";
import {urls} from "../../../configs";


@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(page = 1): Observable<IEpisodeResponse> {
    return this.httpClient.get<IEpisodeResponse>(`${urls.episodes}/?page=${page}`)
  }

  getById(id:number):Observable<IEpisode>{
    return this.httpClient.get<IEpisode>(`${urls.episodes}/${id}`)
  }
}
