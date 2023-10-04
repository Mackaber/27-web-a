
const app = document.getElementById("app");
const form = app.querySelector("#busqueda");
const keyboard_q = app.querySelector("#keyboard_q");
const input_nombre = app.querySelector("#input_nombre");

window.addEventListener("DOMContentLoaded", () => {

  form.addEventListener("submit",(e) => {
    console.log(input_nombre.value)

    e.preventDefault()
  })

  keyboard_q.addEventListener("click",(e) => {
    input_nombre.value += "q"
  })

  keyboard_w.addEventListener("click", (e) => {
    input_nombre.value += "w"
  })

});