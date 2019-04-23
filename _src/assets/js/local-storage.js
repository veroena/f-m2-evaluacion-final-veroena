'use strict';

function saveArr(array) {
  localStorage.setItem('Array favoritos', JSON.stringify(array));
}

function getArr(array) {
  paintArr(array);
}
favArr = JSON.parse(localStorage.getItem('Array favoritos'));
getArr(favArr);

function paintArr(array) {
 if(array === null) {
   console.log('El array está vacío!');
 } else {
   paintFav(array);
 }
}