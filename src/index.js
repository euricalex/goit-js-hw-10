// index.js

import { fetchBreeds, fetchCatByBreed } from "./cat-api.js";

const selectList = document.querySelector('select.breed-select');
const catInfo = document.querySelector('div.cat-info');
const choices = new Choices(selectList, {
  searchEnabled: false,
  itemSelectText: ""
});

selectList.addEventListener('change', () => {
  const selectBreedID = selectList.value;
  fetchCatByBreed(selectBreedID)
    .then(catData => {
      const imageCat = document.createElement('img');
      imageCat.classList.add("image-cat");
      imageCat.src = catData.url;

      catInfo.innerHTML = `
        <div class="cat-details">
          <p class="name"><strong>${catData.breeds[0].name}</strong></p>
          <p class="desc">${catData.breeds[0].description}</p>
          <p class="temp"><strong>Temperament:</strong> ${catData.breeds[0].temperament}</p>
        </div>
      `;
      catInfo.prepend(imageCat);
    });
});

fetchBreeds().then(breeds => {
  const options = breeds.map(breed => ({
    value: breed.value,
    label: breed.label
  }));

  options.unshift({
    value: '',
    label: 'Select a breed'
  });

  choices.setChoices(options, 'value', 'label');
  choices.setChoiceByValue('');
});




    

