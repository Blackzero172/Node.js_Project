const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const dbURL = "mongodb://127.0.0.1:27017";
const dbName = "findMyRestaurant";

MongoClient.connect(dbURL, { useNewUrlParser: true }, async (err, client) => {
	if (err) {
		return console.log(err);
	}
	const db = client.db(dbName);
	const collection = db.collection("restaurants");
	const allQuery = collection.find({});
	await allQuery.forEach(console.dir);
	console.log("-----------------------");
	const cuisineQuery = collection.find({ cuisine: "NA" });
	await cuisineQuery.forEach(console.dir);
	console.log("-----------------------");
	const kosherQuery = collection.find({ kosher: "true" });
	await kosherQuery.forEach(console.dir);
	console.log("-----------------------");
	const cityQuery = collection.find({ "address.city": "New York" });
	await cityQuery.forEach(console.dir);
	console.log("-----------------------");
});
