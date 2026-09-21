const data = require("./data.json");
// data is now a normal JS object

console.log("BEFORE:", data.profile.age);

data.profile.age = 20;

console.log("AFTER:", data.profile.age);


const age = data.profile.age;

console.log(data.profile.name);

data.profile.age = 20;

const fs = require("fs");
const Jsondata = JSON.stringify(data, null, 2)


fs.writeFileSync("./data.json",Jsondata)

console.log("SAVED");