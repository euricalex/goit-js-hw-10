
import { fetchBreeds } from "./cat-api.js";
import { fetchCatByBreed } from "./cat-api.js";



const selectList = document.querySelector('select.breed-select');
const choices = new Choices(selectList, {
  searchEnabled: false,
  itemSelectText: ""
});

    const catInfo = document.querySelector('div.cat-info');

    fetchBreeds().then(data => {
      choices.setChoices(data, 'value', 'label');
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
      <p class="name"><strong>${catData.breeds[0].name}</strong> </p>
      <p class="desc"><strong>Description:</strong> ${catData.breeds[0].description}</p>
      <p class="temp"><strong>Temperament:</strong> ${catData.breeds[0].temperament}</p>
    </div>

`;

    catInfo.prepend(imageCat);
  
   
    });
    })


