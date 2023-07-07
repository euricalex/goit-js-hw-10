import axios from "axios";

axios.defaults.headers.common["x-api-key"] = "твій ключ";


    const selectList = document.querySelector('.breed-select');
    const selectLoader = document.querySelector('.loader');
    const selectError = document.querySelector('.error');


 const BASE_URL = fetch('https://api.thecatapi.com/v1/breeds');
 BASE_URL.then(response => {
    if(!response.ok) {
        throw new Error(response.status);
    }
    return response.json();
 }).then(data => {
    console.log(data);
 }).catch(error => {
    console.warn(error);
 })