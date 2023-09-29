import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { baseUrl } from "./src/config";
import { UserCard } from "./src/components/UserCard";

const usersDom = document.querySelector("#usersDom");

window.addEventListener("DOMContentLoaded", () => {
  const urlUsers = baseUrl({ path: "/users", limit: 4 });

  fetch(urlUsers)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(({ users }) => {
      users.map((user) => usersDom.appendChild(UserCard(user)));
      // usersDom.appendChild(UserCard(users[0])); -> Template String

      /* const btnLike = document.querySelector("#btnLike");
      btnLike.addEventListener("click", () => {
        console.log("click");
      }); */
    });
});
