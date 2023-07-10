import Notiflix from 'notiflix';
import axios from "axios";

axios.defaults.headers.common["x-api-key"] = "live_Z8l9F93SRU8dYWzbJDVTubDfCbJzIKfD1UP5CtYqKcLNZjaRR0P8B9RHyk02d1Al";

const selectLoader = document.querySelector('.loader');
const selectError = document.querySelector('.error');


export function fetchBreeds() {
    const BASE_URL = "https://api.thecatapi.com/v1/breeds";
    showLoader();
    hideError();
    
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
        showError();
      }) 
      .finally(() => {
        hideLoader();
      });
 
    }
    export function fetchCatByBreed(breedId) {
        const URL = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;
        showLoader();
        hideError();
      
        return axios.get(URL)
          .then(response => {
            if (response.status !== 200) {
              throw new Error(response.status);
            }
            return response.data[0];
          })
          .catch(error => {
            console.warn(error);
            showError();
          })
          .finally(() => {
            hideLoader();
          })
      }
      function showLoader() {
      selectLoader.classList.add('visible');
      }
  
        function hideLoader() {
    selectLoader.classList.remove('visible');
      }
  
       function showError() {
  selectError.classList.remove('hidden');
  Notiflix.Notify.failure("Oops! Something went wrong! Try reloading the page!");
  //       
      }
       function hideError() {
  selectError.classList.add('hidden');
      }
  

     