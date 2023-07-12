import { fetchBreeds, fetchCatByBreed } from "./cat-api.js";

const selectList = document.querySelector("select.breed-select");
const catInfo = document.querySelector(".cat-info");
selectList.style.display = 'none';
fetchBreeds().then(data => {
  // Создаем плейсхолдер "Select a breed"
  const placeholderOption = document.createElement("option");
  placeholderOption.value = "";
  placeholderOption.textContent = "Select a breed";
  placeholderOption.disabled = true;
  placeholderOption.selected = true;
  selectList.appendChild(placeholderOption);
  selectList.style.display = 'block';

  // Добавляем остальные варианты выбора
  data.forEach(breed => {
    const option = document.createElement("option");
    option.value = breed.value;
    option.textContent = breed.label;
    selectList.appendChild(option);
  });
});

selectList.addEventListener("change", () => {
  // Удаляем плейсхолдер из списка опций
  const placeholderOption = selectList.querySelector("option[value='']");
  if (placeholderOption) {
    selectList.removeChild(placeholderOption);
  }

  const selectBreedID = selectList.value;
  fetchCatByBreed(selectBreedID).then((catData) => {
    const imageCat = document.createElement("img");
    imageCat.classList.add("image-cat");
    imageCat.src = catData.url;

    catInfo.innerHTML = `
      <div class="cat-details">
        <p class="name"><strong>${catData.breeds[0].name}</strong></p>
        <p class="desc"><strong>Description:</strong> ${catData.breeds[0].description}</p>
        <p class="temp"><strong>Temperament:</strong> ${catData.breeds[0].temperament}</p>
      </div>
    `;

    catInfo.prepend(imageCat);
  });
});
