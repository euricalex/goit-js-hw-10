var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var s={id:e,exports:{}};return n[e]=s,r.call(s.exports,s,s.exports),s.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,n){t[e]=n},e.parcelRequired7c6=r);var s=r("9dxg1");s=r("9dxg1");const l=document.querySelector("select.breed-select"),a=document.querySelector("div.cat-info"),o=new Choices(l,{searchEnabled:!1,itemSelectText:""});(0,s.fetchBreeds)().then((e=>{const n=e.map((e=>({value:e.value,label:e.label})));n.unshift({value:"",label:"Select a breed"}),o.setChoices(n,"value","label"),o.setChoiceByValue("")})),l.addEventListener("change",(()=>{const e=l.value;(0,s.fetchCatByBreed)(e).then((e=>{const n=document.createElement("img");n.classList.add("image-cat"),n.src=e.url,a.innerHTML=`\n      <div class="cat-details">\n      <p class="name"><strong>${e.breeds[0].name}</strong> </p>\n      <p class="desc"><strong>Description:</strong> ${e.breeds[0].description}</p>\n      <p class="temp"><strong>Temperament:</strong> ${e.breeds[0].temperament}</p>\n    </div>\n`,a.prepend(n)}))}));
//# sourceMappingURL=index.9cc17671.js.map
