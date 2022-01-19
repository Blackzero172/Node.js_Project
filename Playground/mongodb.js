const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const dbURL = "mongodb://127.0.0.1:27017";
const dbName = "myDB";

MongoClient.connect(dbURL, { useNewUrlParser: true }, (err, client) => {
	if (err) {
		return console.log(err);
	}
	const db = client.db(dbName);
	db.collection("users").insertOne(
		{
			name: "Ali",
			age: "19",
		},
		(err, result) => {
			if (err) {
				return console.log(err);
			}
			console.log(result);
		}
	);
	db.collection("users").insertMany(
		[
			{
				name: "Omar",
				age: "19",
			},
			{
				name: "Ahmad",
				age: "24",
			},
		],
		(err, result) => {
			if (err) {
				return console.log(err);
			}
			console.log(result);
		}
	);
});
