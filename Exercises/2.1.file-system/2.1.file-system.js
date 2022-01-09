const fs = require("fs");
fs.writeFileSync("new-file.txt", "Testing");
fs.copyFileSync("new-file.txt", "new-file-copy.txt");
fs.renameSync("new-file.txt", "newer-file.txt");
const filesList = fs.readdirSync("../2.1.file-system");
console.log(filesList);
fs.writeFileSync("files-list.txt", "The files in this folder are: ");
filesList.forEach((file) => {
	fs.appendFileSync("files-list.txt", `${file} `);
});

fs.mkdirSync("testing");
