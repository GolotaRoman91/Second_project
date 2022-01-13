import { DOM } from './dom';
const axios = require('axios')
export async function fillFiltersGenre() {
    const genreArray = await axios.get(`http://127.0.0.1:3001/genres`)
    const languageArray = await axios.get(`http://127.0.0.1:3001/languages`)
    createGenresBlock(genreArray.data)
    createlanguageBlock(languageArray.data)
}
function createGenresBlock(genreArray) {
    genreArray.forEach(genre => {
        DOM.genres.innerHTML += `<li data-f="Action" id="${genre.id}" class="filmsGenres" data-value="1">${genre.name}</li>`
    });
}
function createlanguageBlock(languageArray) {
    console.log(languageArray)
    languageArray.forEach(language => {
        DOM.selectLanguage.innerHTML += `<option class="language">${language.original_language}</option>`
    });
}