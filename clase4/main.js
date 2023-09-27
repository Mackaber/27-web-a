import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { baseUrl } from "./src/config";
import { UserCardTemplate } from "./src/components/UserCard";

const usersDom = document.querySelector("#usersDom");

window.addEventListener("DOMContentLoaded", () => {
  const urlUsers = baseUrl({ path: "/users", limit: 8 });

  fetch(urlUsers)
    .then((response) => {
      // throw new Error(response.status);
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(({ users, total, skip, limit }) => {
      /* usersDom.innerHTML = UserCardTemplate({
        image: users[0].image,
        company: { department: users[0].company.department },
        firstName: users[0].firstName,
        lastName: users[0].lastName,
      }); */
      /* usersDom.innerHTML = UserCardTemplate(users[0]); */
      users.map((user) => (usersDom.innerHTML += UserCardTemplate(user)));
    });
});
