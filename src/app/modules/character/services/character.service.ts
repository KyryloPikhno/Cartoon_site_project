import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {ICharacterResponse, ICurrentEpisode} from "../interfaces";
import { urls } from 'src/app/configs';


@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private httpClient:HttpClient) {
  }

  getByEpisode():Observable<ICharacterResponse>{
    return this.httpClient.get<ICharacterResponse>(`${urls.characters}`)
  }

  currentEpisode(id:string):Observable<any>{
    return this.httpClient.get<ICurrentEpisode>(`${urls.episodes}/${id}`)
  }
}
