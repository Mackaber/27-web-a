const moment = require("moment")

console.log("Cuantos días faltan para mi cumpleaños?")
//let christmas = moment('2023-12-25T00:00:00Z', moment.ISO_8601);
let birthday = moment('2025-12-18T00:00:00Z', moment.ISO_8601);
let today = moment()
const days_left = birthday.diff(today, 'days');

console.log(days_left);