import { IPaginatedData } from "./pagination-data.interface";
import {IEpisode} from "./episode.interface";


export interface IEpisodeResponse{
    info:IPaginatedData
    results: IEpisode[]
}
