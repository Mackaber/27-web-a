import "bootstrap/dist/css/bootstrap.min.css";
import { buscarPokemon } from "./pokeapiService";

const app = document.getElementById("app");
const form = app.querySelector("#busqueda");
const keyboard_q = app.querySelector("#keyboard_q");
const input_nombre = app.querySelector("#input_nombre");
const container = app.querySelector("#container");

const display_pokemon = (name,type,image_url) => {
  return `
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${image_url}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <p class="card-text">
            <span><label>Tipo: </label>${type}</span>
          </p>
        </div>
      </div>
      `
} 

window.addEventListener("DOMContentLoaded", () => {

  /* Sin Form...
  buscar_btn.addEventListener('click', async (e) => {
    let pokemon = await buscarPokemon(e.target.nombre.value)
    console.log(pokemon)
  })
  */

  form.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(input_nombre.value)
    const fetchData = async () => {
      let pokemon = await buscarPokemon(e.target.nombre.value)
      console.log(pokemon)
      

      container.innerHTML = display_pokemon(pokemon.name, 
        pokemon.types[0].type.name,
        pokemon.sprites.other["official-artwork"].front_default)

    }
    /*
    Con .then
    buscarPokemon(e.target.nombre.value).then((pokemon) => {

    })
    */

    /*
      arregloPromesas = []
      for(i=1;i<151;i++) {
      arregloPromesas.push(buscarPokemon(i))
      }

      Promise.all(arregloPromesas)
    */
    fetchData()
  })

  keyboard_q.addEventListener("click",(e) => {
    input_nombre.value += "q"
  })

  keyboard_w.addEventListener("click", (e) => {
    input_nombre.value += "w"
  })

});