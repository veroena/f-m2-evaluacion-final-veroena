'use strict';

function saveArr(array) {
  localStorage.setItem('Array favoritos', JSON.stringify(array));
}

function getArr() {
  favArr = JSON.parse(localStorage.getItem('Array favoritos'));
  console.log(favArr);
  if(favArr !== null) {
    paintFav(favArr);
  }
}

getArr(favArr);

// function paintArr(array) {
//  if(array === null) {
//    console.log('El array está vacío!');
//  } else {
//    paintFav(array);
//  }
// }