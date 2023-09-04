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

    const imageUser = document.createElement("img");
    imageUser.src = `img/${user["Display name"]}.jpg`;
    main.appendChild(imageUser);

    const userItemInfo = document.createElement("div");
    userItemInfo.className = "user-item__info";
    main.appendChild(userItemInfo);

    const nombreUser = document.createElement("h2");
    nombreUser.innerHTML = user["Display name"];
    userItemInfo.appendChild(nombreUser);

    const title = document.createElement("h3");
    title.innerHTML = user["Title"];
    userItemInfo.appendChild(title);

    const country = document.createElement("h3");
    country.innerHTML = user["Country/Region"];
    userItemInfo.appendChild(country);
}