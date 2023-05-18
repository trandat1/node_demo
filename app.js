// const names = require('./name')
// const fun = require('./utils')
// const alter = require('./alternative')

// setInterval(()=>{
//     fun(names.first_name)
// },1000)

// console.log(alter.person.name)
// ################################
// const os = require('os')
// const user = os.userInfo()
// const currentOS = {
//     name: os.type(),
//     release: os.release(),
//     totalMem: os.totalmem(),
//     freeMem: os.freemem(),
// }
// console.log(currentOS)
// ################################
// const { readFileSync, writeFileSync } = require("fs");

// const first = readFileSync("./text.txt", "utf-8");

// writeFileSync("./text.txt", " world", { flag: "a" });
//################################
// const { readFile, writeFile } = require("fs");
// console.log('start')
// readFile("./text.txt", "utf-8", (err, result) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   text = result
//   writeFile("./text2.txt", `${text} !`, (err, result) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     console.log("done with this task");
//   });
// });
// console.log("starting next task")
// ##########
// const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.end("welcome to our web server");
//   }
//   if (req.url === '/about') {
//     console.log(res);
//     res.end("Here is our short history");
//   }
//   res.end(`
//   <h1>Opps!</h1>
//   <p>We cant't seem to find the page you are looking for </p>
//   <a href ="/about">back home</a>
//   `);
// });

// server.listen(5000);
// ################################
const _ = require("lodash");

const items = [1,[2,[3,[4]]]]

const newItem = _.flattenDeep(items);

console.log(newItem);