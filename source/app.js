// TODO 2: quiero generar el componente usuario (li) de manera automatica con javascript
import { users } from "./data/users.js";

document.addEventListener("DOMContentLoaded", () => load());

function load() {
  users.forEach((user) => createUser(user));
}

function createUser(user) {
  const main = document.getElementById("main");

  const users = document.createElement("ul");
  users.className = "users-list";
  main.appendChild(users);

  const userItem = document.createElement("li");
  userItem.className = "user-item";
  users.appendChild(userItem);

  const card = document.createElement("div");
  card.className = "card user-item_content";
  userItem.appendChild(card);

  const link = document.createElement("a");
  link.href = "#";
  card.appendChild(link);

  const avatarUser = document.createElement("div");
  avatarUser.className = "user-item_image avatar";
  link.appendChild(avatarUser);

  const image = document.createElement("img");
  image.src = `img/${user.name}.jpg`;
  avatarUser.appendChild(image);

  const info = document.createElement("div");
  info.className = "user-item_info";
  link.appendChild(info);

  const name = document.createElement("h2");
  name.innerHTML = user.name;
  info.appendChild(name);

  const contador = document.createElement("h3");
  contador.innerText = "0";
  info.appendChild(contador);
}
