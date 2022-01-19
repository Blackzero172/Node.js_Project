const express = require("express");
const path = require("path");
const pathToJSON = path.join(__dirname, "/users.json");
const pathToPublic = path.join(__dirname, "/public");
console.log();
const server = express();
server.use(express.static(pathToPublic));
server.get("/raw-html", (req, res) => {
	res.send("<h1>Welcome</h1>");
});

server.get("/users", (req, res) => {
	res.sendFile(pathToJSON);
});
server.listen(3000, () => {
	console.log("Server is listening on port 3000");
});
