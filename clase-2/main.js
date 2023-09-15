const moment = require("moment")

console.log("Cuantos días faltan para navidad?")
let christmas = moment('2023-12-25T00:00:00Z', moment.ISO_8601);
let today = moment()
const days_left = christmas.diff(today, 'days');

console.log(days_left);