import { environment } from "src/environments/environment";


const {API} = environment;

const urls = {
  characters: `${API}/characters`,
  locations: `${API}/locations`,
  episodes: `${API}/episode`
};

export {urls}
