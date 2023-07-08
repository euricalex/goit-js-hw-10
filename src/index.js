
import { fetchBreeds } from "./cat-api.js";
import { fetchCatByBreed } from "./cat-api.js";


    const selectList = document.querySelector('select.breed-select');
    console.log(selectList);
    const selectLoader = document.querySelector('.loader');
    const selectError = document.querySelector('.error');
    const catInfo = document.querySelector('div.cat-info');

    fetchBreeds()
    .then(data => {
      data.forEach(breed => {
        const option = document.createElement('option');
        option.value = breed.value;
        option.textContent = breed.label;
        selectList.appendChild(option);
        
      });
    });
    
    selectList.addEventListener('change', () => {
const selectBreedID = selectList.value;
fetchCatByBreed(selectBreedID)
    .then(catData => {
      const imageCat = document.createElement('img');
      imageCat.src = catData.url;

      catInfo.innerHTML = `
      <p><strong>${catData.breeds[0].name}</strong> </p>
      <p><strong>Description:</strong> ${catData.breeds[0].description}</p>
      <p><strong>Temperament:</strong> ${catData.breeds[0].temperament}</p>
    `;
    catInfo.prepend(imageCat);
    });
    })
let timerId = 0;
    setTimeout(() => {
      selectLoader.disabled = true;
    }, 2000)
    

