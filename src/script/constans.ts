export const constants = {
    URLIMG: 'https://image.tmdb.org/t/p/original',
    requestURLMovie: 'https://wowmeup.pp.ua/movie?_limit=100',
    movies: [],
    movieOnPage: 5,
    filteredFilms: [],
    adultFilms: [],
    budgetFilms: [],
    filmByLang: []
};

export const domElement = {
    BtnLeft: document.querySelector('.btnRight') as HTMLElement,
    BtnRight: document.querySelector('.btnLeft') as HTMLElement,
    movieContainer: document.querySelector('.cartFilms') as HTMLElement,
    movieElement: document.createElement('img') as HTMLElement,
    movieElements: document.querySelectorAll('.cartFilm') as HTMLCollectionBase,
    films: document.querySelectorAll('.films') as HTMLCollectionBase,
    nav: document.getElementById('nav-block') as HTMLElement,
    adult: document.querySelector('.adult') as HTMLElement,
    btnFilter: document.querySelector('.btnFilter') as HTMLElement,
    minNumberBudget: document.querySelector('.minNumberBudget') as HTMLElement,
    maxNumberBudget: document.querySelector('.maxNumberBudget') as HTMLElement,
    filmId: document.getElementById('filmId') as HTMLElement,
    selectLanguage: document.getElementById('selectLanguage') as HTMLElement,
    containerFilter: document.querySelector('.containerFilter') as HTMLElement,
    btnFilterFilms: document.querySelector('.btnFilterFilms') as HTMLElement,
    btnResetSettings: document.querySelector('.btnResetSettings') as HTMLElement,
};

export let variable = {
    htmlElems: [],
    currentPage: 1,
    numbersPage: 0,
    variable: 0,
    minBudget: 0,
    maxBudget: 0,
    skip: 0,
    limit: 5
};

export let filterData = {
    genre_ids: [],
    id: null,
    release_date: null,
    original_language: null,
    budget: null,
    adult: null,
}
