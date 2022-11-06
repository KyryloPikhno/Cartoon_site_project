import {IPaginatedData} from "./pagination-data.interface";
import {ICharacter} from "./character.interface";


export interface ICharacterResponse{
    info:IPaginatedData
    results: ICharacter[]
}
