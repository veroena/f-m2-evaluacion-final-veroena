'use strict';

function saveArr(array) {
  localStorage.setItem('Array favoritos', JSON.stringify(array));
}

function getArr(array) {
  console.log('savedFavArr', array.length);
  paintArr(array);
}
const savedFavArr = JSON.parse(localStorage.getItem('Array favoritos'));
getArr(savedFavArr);

function paintArr(array) {
 if(array.length === 0) {
   console.log('El array está vacío!');
 } else {
   paintFav(array);
 }
}