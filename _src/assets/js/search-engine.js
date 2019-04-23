'use strict';

const input = document.querySelector('.search__input');
const btn = document.querySelector('.search__btn');
const listResults = document.querySelector('.main__results');
const favList = document.querySelector('.main__results-favorites');

let favArr = [];

const searchEngine = () => {
  listResults.innerHTML = '';
  fetch(`http://api.tvmaze.com/search/shows?q=${input.value}`)
    .then(response => response.json())
    .then(data => {
      for(let i = 0; i < data.length; i++) {
        // creo elementos
        const resultItem = document.createElement('li');
        const resultItemTitle = document.createElement('h3');
        const resultItemImage = document.createElement('img');

        //añado clases a los elementos
        resultItem.classList.add('result-item');
        resultItemTitle.classList.add('result-item__title');
        resultItemImage.classList.add('result-item__image');

        //creo contenido
        const nameShow = data[i].show.name;
        const resultItemTitleContent = document.createTextNode(nameShow);

        //añado contenido a elementos
        resultItemTitle.appendChild(resultItemTitleContent);
        const imageShow = data[i].show.image;
        const imagePlaceholder = `https://via.placeholder.com/210x295/D4D9D3/C28611/?text=TV`;
        if (imageShow === null) {
          resultItemImage.src = imagePlaceholder;
        } else {
          resultItemImage.src = imageShow.medium;
        }

        //creo objeto para almacenar en el array 
        const objectNew = newObject(data[i].show.id, data[i].show.name,data[i].show.image) 

        //añado elementos dentro de otros elementos
        resultItem.appendChild(resultItemImage);
        resultItem.appendChild(resultItemTitle);

        //añado elementos al HTML
        listResults.appendChild(resultItem);


        //añado listener a los li para la funcionalidad de favoritos. QUITAR LOS DOS ADDEVENTLISTENERS
        resultItem.addEventListener('click', selectFavorite);
        resultItem.addEventListener('click', () => {pushFav(objectNew)});
        resultItem.addEventListener('click', () => {paintFav(favArr)});
      }
    })
}

btn.addEventListener('click', searchEngine);

function enterKey (event) {
  if(event.keyCode === 13) {
    searchEngine();
  }
}

window.addEventListener('keyup', enterKey);