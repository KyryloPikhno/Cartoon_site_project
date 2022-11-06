import { environment } from "src/environments/environment";


const {API} = environment;

const urls = {
  characters: `${API}/character`,
  locations: `${API}/locations`,
  episodes: `${API}/episode`
};

export {urls}
