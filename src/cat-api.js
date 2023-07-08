import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_Z8l9F93SRU8dYWzbJDVTubDfCbJzIKfD1UP5CtYqKcLNZjaRR0P8B9RHyk02d1Al";

export function fetchBreeds() {
    const BASE_URL = "https://api.thecatapi.com/v1/breeds";
    
    return axios.get(BASE_URL)
      .then(response => {
        if (response.status !== 200) {
          throw new Error(response.status);
        }
        return response.data.map(breed => ({
          value: breed.id,
          label: breed.name
        }));
      })
      .catch(error => {
        console.warn(error);
      });  
 
    }
    export function fetchCatByBreed(breedId) {
        const URL = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;
      
        return axios.get(URL)
          .then(response => {
            if (response.status !== 200) {
              throw new Error(response.status);
            }
            return response.data[0];
          })
          .catch(error => {
            console.warn(error);
          });
      }