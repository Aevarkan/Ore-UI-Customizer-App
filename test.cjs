const { execSync } = require("node:child_process");
const path = require("node:path");
console.log(path.join(execSync('npm root -g').toString().replace(/[\n\r]*$/, ""), "eslint/config"))