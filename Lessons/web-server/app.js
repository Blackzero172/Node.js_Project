const express = require("express");

const app = express();

app.get("", (req, res) => {
	res.send("<h1>Hello Express!</h1>");
});
app.get("/about", (req, res) => {
	res.send("About Page");
});
app.get("/weather", (req, res) => {
	res.send("Weather Page");
});
app.listen(3000, () => {
	console.log("Starting!!!");
});
