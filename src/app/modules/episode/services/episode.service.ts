import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {ICharacter, ICharacterResponse, IEpisode, IEpisodeResponse} from "../interfaces";
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

  getById(id:string):Observable<IEpisode>{
    return this.httpClient.get<IEpisode>(`${urls.episodes}/${id}`)
  }

  getCharacters():Observable<ICharacterResponse>{
    return this.httpClient.get<ICharacterResponse>(`${urls.characters}`)
  }

  getCharactersById(id:any):Observable<ICharacter>{
    return this.httpClient.get<ICharacter>(`${urls.characters}/${id}`)
  }
}
