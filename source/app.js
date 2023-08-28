import { users } from "../data/users.js";

document.addEventListener("DOMContentLoaded", () => Load());

function Load(){
    users.forEach(user => CreateUser(user));
}

function CreateUser(user){
    const main = document.getElementById('main');

    const users = document.createElement("ul");
    users.className = "users-list";
    main.appendChild(users);

    const userItem = document.createElement("li");
    userItem.className = "user-item";
    users.appendChild(userItem);

    const card = document.createElement("div");
    card.className = "card user-item__content";
    userItem.appendChild(card);

    const link = document.createElement("a");
    link.href = "#"; // Podría ir un link a otra pagina
    card.appendChild(link);

    const userItemImage = document.createElement("div");
    userItemImage.className = "user-item__image avatar";
    link.appendChild(userItemImage);

    const imageUser = document.createElement("img");
    imageUser.src = `img/${user.name}.jpg`;
    userItemImage.appendChild(imageUser);

    const userItemInfo = document.createElement("div");
    userItemInfo.className = "user-item__info";
    link.appendChild(userItemInfo);

    const nombreUser = document.createElement("h2");
    nombreUser.innerHTML = user.name;
    userItemInfo.appendChild(nombreUser);

    const twitter = document.createElement("h3");
    twitter.innerHTML = user.twitter;
    userItemInfo.appendChild(twitter);
}

// TODO: ver el tema del Module
// TODO: ver el tema de utilizar archivos js desde otro js

// TODO 1: Arreglar para que muestre las imagenes correctamente.
// TODO 2: Crear la pagina de detalle de usuario, donde muestre 
//         todos los datos. (foto y datos)

