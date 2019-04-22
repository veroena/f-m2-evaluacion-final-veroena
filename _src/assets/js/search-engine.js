'use strict';

const input = document.querySelector('.search-input');
const btn = document.querySelector('.search-btn');
const listResults = document.querySelector('.main-results');

const searchEngine = () => {
  fetch(`http://api.tvmaze.com/search/shows?q=${input.value}`)
    .then(response => response.json())
    .then(data => {
      listResults.innerHTML = '';
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
        const resultItemTitleContent = document.createTextNode(data[i].show.name);

        //añado contenido a elementos
        resultItemTitle.appendChild(resultItemTitleContent);
        resultItemImage.src = data[i].show.image.medium;

        //añado elementos dentro de otros elementos
        resultItem.appendChild(resultItemImage);
        resultItem.appendChild(resultItemTitle);

        //añado elementos al HTML
        listResults.appendChild(resultItem);
      }
    })
}

btn.addEventListener('click', searchEngine);