const fs = require("fs");
fs.writeFileSync("notes.txt", "My name is Ali!!");
fs.appendFileSync("notes.txt", " This file was created using Node.js");
