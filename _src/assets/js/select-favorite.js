"use strict";

function selectFavorite() {
  event.currentTarget.classList.toggle("selected__favorite");
}

function pushFav(obj) {
  const find = favArr.findIndex(show => show.id === obj.id);
  if (find === -1) {
    favArr.push(obj);
  } else {
    favArr.splice(find, 1);
  }
  saveArr(favArr);
}

function newObject(id, name, image) {
  return{
    id: id,
    name: name,
    image: image
  }
}

//función para pintar los favoritos
function paintFav(array) {
  favList.innerHTML = '';
  if (array.length === 0) {
    console.log('El array está vacío, maja');
  } else {
    for (let i = 0; i < array.length; i++) {
      //creo elementos
      const favItem = document.createElement('li');
      const favItemTitle = document.createElement('h4');
      const favItemImage = document.createElement('img');
  
       //añado clases a los elementos
       favItem.classList.add('fav-item');
       favItemTitle.classList.add('fav-item__title');
       favItemImage.classList.add('fav-item__image');
  
       //creo contenido
       const nameShowFav = array[i].name;
       const favItemTitleContent = document.createTextNode(nameShowFav);
  
       //añado contenido a elementos
       favItemTitle.appendChild(favItemTitleContent);
       const favImageShow = array[i].image;
       const favImagePlaceholder = `https://via.placeholder.com/210x295/ffffff/666666/?text=${nameShowFav}`;
       if (favImageShow === null) {
         favItemImage.src = favImagePlaceholder;
       } else {
         favItemImage.src = favImageShow.medium;
       }
  
       //añado elementos dentro de otros elementos
       favItem.appendChild(favItemImage);
       favItem.appendChild(favItemTitle);
  
       //añado elementos al HTML
       favList.appendChild(favItem);
    }
  }
}