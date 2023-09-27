import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { baseUrl } from "./src/config";

window.addEventListener("DOMContentLoaded", () => {
  console.log("Sitio web cargado");

  fetch(baseUrl)
    .then((response) => {
      const { ok, status } = response;
      if (!ok) {
        throw new Error(status);
      }
      return response.json();
    })
    .then(({ users, total, skip, limit }) => {
      
    });
});
