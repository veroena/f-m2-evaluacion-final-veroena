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
    console.log('El array está vacío!');
  } else {
    for (let i = 0; i < array.length; i++) {
      //creo elementos
      const favItem = document.createElement('li');
      const favItemTitle = document.createElement('h4');
      const favItemImage = document.createElement('img');
      const favItemClose = document.createElement('i');
  
       //añado clases a los elementos
       favItem.classList.add('fav-item');
       favItemTitle.classList.add('fav-item__title');
       favItemImage.classList.add('fav-item__image');
       favItemClose.classList.add('fas', 'fa-times-circle');
  
       //creo contenido
       const nameShowFav = array[i].name;
       const favItemTitleContent = document.createTextNode(nameShowFav);
  
       //añado contenido a elementos
       favItemTitle.appendChild(favItemTitleContent);
       const favImageShow = array[i].image;
       const favImagePlaceholder = `https://via.placeholder.com/210x295/D4D9D3/C28611/?text=TV`;
       if (favImageShow === null) {
         favItemImage.src = favImagePlaceholder;
       } else {
         favItemImage.src = favImageShow.medium;
       }
  
       //añado elementos dentro de otros elementos
       favItem.appendChild(favItemImage);
       favItem.appendChild(favItemTitle);
       favItem.appendChild(favItemClose);
  
       //añado elementos al HTML
       favList.appendChild(favItem);

      // favItemClose.addEventListener('click', deleteFav);
    }
  }
}

// function deleteFav(event) {
//   const find = favArr.findIndex(show => show.id === event.currentTarget.id);
//   if (event.currentTarget.id === ) {
//     favArr.splice(find, 1);
//   }
//   saveArr(favArr);
// }