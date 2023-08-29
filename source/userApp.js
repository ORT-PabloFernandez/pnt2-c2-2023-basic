import { users } from "../data/users.js";

document.addEventListener("DOMContentLoaded", () => Load());

function Load(){
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    const user = users.find(user => user["Object Id"] == params.get("userId"));
    CreateUser(user);
}

// TODO: UserDetails o crear componente con detalle del usuario
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
    link.href = "user.htm?userId=" + user["Object Id"]; // Podría ir un link a otra pagina
    card.appendChild(link);

    const userItemImage = document.createElement("div");
    userItemImage.className = "user-item__image avatar";
    link.appendChild(userItemImage);

    const imageUser = document.createElement("img");
    imageUser.src = `img/${user["Display name"]}.jpg`;
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