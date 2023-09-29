import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { endpointPaises } from "./src/config";
import { orderBy } from "lodash";

const app = document.getElementById("app");
const form = app.querySelector("form");
const selectDom = app.querySelector(".select-dinamico");

// TODO: Cargar los paises en el select
// TODO: Buscar desde la api del clima
window.addEventListener("DOMContentLoaded", () => {
  selectDom.innerHTML = "<option disabled selected>Selecciona un pais</option>";
  fetch(endpointPaises)
    .then((data) => data.json())
    .then((countries) => {
      const orderByNameCountries = orderBy(countries, ["name.common", ["asc"]]);

      const option = ({ cca2, name }) => `
        <option value="${cca2}">${name.common}</option>
      `;

      orderByNameCountries.map(
        (country) => (selectDom.innerHTML += option(country))
      );
    });
  form.addEventListener("submit", (event) => {
    event.preventDefault();
  });
});
