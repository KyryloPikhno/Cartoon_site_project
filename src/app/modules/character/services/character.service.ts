import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {ICharacterResponse} from "../interfaces";
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
}
