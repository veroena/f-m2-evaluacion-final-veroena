"use strict";

function selectFavorite() {
  event.currentTarget.classList.toggle("selected__favorite");
}

function pushFav(obj) {
  const find = favArr.findIndex(show => show.id === obj.id);
  console.log(obj.name);
  console.log(find);
  if (find === -1) {
    favArr.push(obj);
  } else {
    favArr.splice(find, 1);
  }
  
  console.log(favArr);
}