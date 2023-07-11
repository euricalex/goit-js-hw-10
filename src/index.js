
import { fetchBreeds } from "./cat-api.js";
import { fetchCatByBreed } from "./cat-api.js";



const selectList = document.querySelector('select.breed-select');
const catInfo = document.querySelector('div.cat-info');
const choices = new Choices(selectList, {
 searchEnabled: false,
  itemSelectText: ""
});
fetchBreeds().then(breeds => {
  // Створити варіанти для вибору порід котів
  const options = breeds.map(breed => ({
    value: breed.value,
    label: breed.label
  }));

  // Додати перший елемент до списку варіантів
  options.unshift({
    value: '',
    label: 'Select a breed'
  });

  // Оновити список варіантів у селекті
  choices.setChoices(options, 'value', 'label');
  choices.setChoiceByValue('');
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
      <p class="desc"> ${catData.breeds[0].description}</p>
      <p class="temp"><strong>Temperament:</strong> ${catData.breeds[0].temperament}</p>
    </div>
`;
    catInfo.prepend(imageCat);
    });
    })

    

