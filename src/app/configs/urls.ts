import { environment } from "src/environments/environment";


const {API} = environment;

const urls = {
  characters: `${API}/character`,
  locations: `${API}/location`,
  episodes: `${API}/episode`
};

export {urls}
