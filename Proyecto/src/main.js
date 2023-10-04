import { buscarPokemon } from "./pokeapiService";

const app = document.getElementById("app");
const form = app.querySelector("#busqueda");
const keyboard_q = app.querySelector("#keyboard_q");
const input_nombre = app.querySelector("#input_nombre");
const container = app.querySelector("#container");

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
      let pokemonResultDom = document.createElement("div")

      pokemonResultDom.innerHTML = `
        <div>
          <h5>${pokemon.name}</h5>
          <p>
            <span><label>Tipo principal: </label>${pokemon.types[0].type.name}</span>
          </p>
        <div>
      `

      container.appendChild(pokemonResultDom)
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