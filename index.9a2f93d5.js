!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var a={id:e,exports:{}};return n[e]=a,r.call(a.exports,a,a.exports),a.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,n){t[e]=n},e.parcelRequired7c6=r);var a=r("eWrZJ"),c=(a=r("eWrZJ"),document.querySelector("select.breed-select")),l=document.querySelector("div.cat-info"),o=new Choices(c,{searchEnabled:!1,itemSelectText:""});(0,a.fetchBreeds)().then((function(e){var n=e.map((function(e){return{value:e.value,label:e.label}}));n.unshift({value:"",label:"Select a breed"}),o.setChoices(n,"value","label"),o.setChoiceByValue("")})),c.addEventListener("change",(function(){var e=c.value;(0,a.fetchCatByBreed)(e).then((function(e){var n=document.createElement("img");n.classList.add("image-cat"),n.src=e.url,l.innerHTML='\n      <div class="cat-details">\n      <p class="name"><strong>'.concat(e.breeds[0].name,'</strong> </p>\n      <p class="desc"><strong>Description:</strong> ').concat(e.breeds[0].description,'</p>\n      <p class="temp"><strong>Temperament:</strong> ').concat(e.breeds[0].temperament,"</p>\n    </div>\n"),l.prepend(n)}))}))}();
//# sourceMappingURL=index.9a2f93d5.js.map
