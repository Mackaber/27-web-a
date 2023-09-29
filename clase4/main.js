import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { endpointClima, endpointPaises } from "./src/config";
import { orderBy } from "lodash";

const app = document.getElementById("app");
const form = app.querySelector("form");
const selectDom = app.querySelector(".select-dinamico");
const weatherDom = app.querySelector(".weather-country");

const fetchData = (url) => {
  return fetch(url).then((data) => {
    if (!data.ok) throw new Error(data.status);
    return data.json();
  });
};

// TODO: Cargar los paises en el select -> ok
// TODO: Buscar desde la api del clima
window.addEventListener("DOMContentLoaded", () => {
  selectDom.innerHTML = "<option disabled selected>Selecciona un pais</option>";
  fetchData(endpointPaises)
    .then((countries) => {
      const orderByNameCountries = orderBy(countries, ["name.common", ["asc"]]);

      const option = ({ cca2, name }) => `
        <option value="${cca2}">${name.common}</option>
      `;

      orderByNameCountries.map(
        (country) => (selectDom.innerHTML += option(country))
      );
    })
    .catch(console.log);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const pais = event.target.pais.value;
    const ciudad = event.target.ciudad.value;

    fetchData(endpointClima({ pais, ciudad }))
      .then((weather) => {
        const cardWeather = ({
          name,
          main: { temp, temp_max, temp_min },
          weather,
        }) => `
        <article class="col-3">
          <div class="card text-center">
            <img class="card-img-top bg-dark b-rounded" src="https://openweathermap.org/img/wn/${weather[0].icon}@2x.png" alt="${name}" />
            <div class="card-body">
              <h2 class="card-text m-0">${name}</h2>
              <h3 class="card-title m-0">${temp}</h3>
              <p class="card-text m-0">${temp_min}</p>
              <p class="card-text m-0">${temp_max}</p>
            </div>
          </div>
        </article>
        `;
        weatherDom.innerHTML = cardWeather(weather);
        console.log(weather.main);
      })
      .catch(console.log);
  });
});
