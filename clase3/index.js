/* console.log("Inicio");

set */Timeout(() => {
  console.log("Timeout");
});

console.log("Fin");

/* function sms(str) {
  console.log(str);
} */

/* function inicio(callback, string) {
  callback(string);
} */

// inicio(sms, "hola mundo");
/* inicio((param) => {
  console.log(param);
}, "nuevo mensaje"); */

const btn = document.querySelector("button");
btn.addEventListener("click", (event) => {
  console.log(event.target);
});

//Call Stack
// LIFO -> Last In, First Out
/* function first() {
  console.log("Dentro de first");
}

function second() {
  first();
  console.log("Dentro de second");
}

second(); */

//Event Loop
//fetchData -> tarea asincrona
/* function fetchData(callback) {
  setTimeout(() => {
    callback();
    console.log("Datos recuperados");
  }, 2000);
}
//callback que se ejecutará
function processData() {
  console.log("Procesando datos");
}
//función regular
function normalFunction() {
  console.log("Función normal ejecutada");
}
console.log("Inicio del programa");

fetchData(processData);
normalFunction();

fetchData(() => {
  console.log("Segundo Fetch");
});

console.log("Fin del programa"); */

// inicio del programa
// función normal ejecutada
// fin del programa
// datos recuperados
// procesando datos

// Ejemplos de callbacks
function iterarArreglo(arreglo, callback) {
  for (let index = 0; index < arreglo.length; index++) {
    callback(arreglo[index], index);
  }
}

const numbers = [1, 2, 3, 4];

iterarArreglo(numbers, (number, index) => {
  console.log(`Valor: ${number}, Posición: ${index}`);
});
