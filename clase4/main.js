import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

// document.querySelector("#app").innerHTML = `<h1 class="text-center">Promesas en Javascript</h1>`;
const btnLoad = document.querySelector(".btn-primary");
const info = document.querySelector(".info");
const printError = document.querySelector(".error");

/* 
  window -> navegador
  document -> DOM

  C -> create
  R -> read
  U -> update
  D -> delete
*/

btnLoad.addEventListener("click", () => {
  info.innerHTML = "<p>Cargando...</p>";
  fetch("./src/data/info.json", { method: "POST" })
    .then((response) => {
      const { headers, status, statusText, url, type, ok } = response;
      /* console.log("headers: ", headers.get("Content-Type"));
    console.log("status: ", status);
    console.log("statusText: ", statusText);
    console.log("url: ", url);
    console.log("type: ", type);
    console.log("ok: ", ok); */
      if (!ok) {
        throw new Error(status);
      }
      return response.json();
    })
    .then((data) => {
      // console.log(data);
      // info.innerHTML += JSON.stringify(data);
      info.innerHTML = template(data);
    })
    .catch((error) => {
      console.log(error);
      printError.innerHTML = error;
    });
});

const template = ({ nombre, empresa, trabajo }) => `
  <div class="p-4 bg-dark text-light">
    <p>${nombre}</p>
    <p>${empresa}</p>
    <p>${trabajo}</p>
  </div>
  `;
