var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var o={id:e,exports:{}};return n[e]=o,r.call(o.exports,o,o.exports),o.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,n){t[e]=n},e.parcelRequired7c6=r);var o=r("9dxg1");o=r("9dxg1");const s=document.querySelector("select.breed-select"),d=new Choices(s,{searchEnabled:!1,itemSelectText:""}),c=document.querySelector("div.cat-info");(0,o.fetchBreeds)().then((e=>{d.setChoices(e,"value","label")})),s.addEventListener("change",(()=>{const e=s.value;(0,o.fetchCatByBreed)(e).then((e=>{const n=document.createElement("img");n.style.width="600px",n.src=e.url,c.innerHTML=`\n      <p class="name"><strong>${e.breeds[0].name}</strong> </p>\n      <p class="desc"><strong>Description:</strong> ${e.breeds[0].description}</p>\n      <p class="temp"><strong>Temperament:</strong> ${e.breeds[0].temperament}</p>\n    `,c.prepend(n)}))}));
//# sourceMappingURL=index.afbb3581.js.map
