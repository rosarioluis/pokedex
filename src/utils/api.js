import { API_URL } from "./constants";
import axios from "axios";
export const getPokemons = async (nextUrl) => {
      try {
            const url = nextUrl ? nextUrl : `${API_URL}/pokemon?limit=20&offset=0`;
            const { data: { results, next } } = await axios.get(url);
            const fetchPromises = results.map(async result => await axios.get(result.url));
            const details = await Promise.all(fetchPromises).then(values => {
                  const results = values.map(response => response.data);
                  return results;
            });
            return { details, next };
      }
      catch (e) {
            const details=[];
            const next ='';
            return { details, next};
      }
}
export const getSpecies = async (id) => {
      try {
            const url = `${API_URL}/pokemon-species/${id}`;
            const { data } = await axios.get(url);
            const color = data.color.name;
            return { color }
      }
      catch (e) {
            return "blue";
      }
}

