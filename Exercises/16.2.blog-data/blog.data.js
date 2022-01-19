const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;
const dbURL = "mongodb://127.0.0.1:27017";
const dbName = "blogDB";

MongoClient.connect(dbURL, { useNewUrlParser: true }, (err, client) => {
	const database = client.db(dbName);
	const collection = database.collection("users");
	collection.insertMany([
		{
			username: "John Doe",
			email: "johndoe@gmail.com",
			posts: [
				{
					id: 0,
					content: "",
					comments: [
						{
							commenter: "Jane Doe",
							comment: "That is so great",
						},
					],
				},
			],
		},
		{
			username: "Jane Doe",
			email: "janedoe@gmail.com",
			posts: [
				{
					id: 0,
					content: "",
					comments: [
						{
							commenter: "John Doe",
							comment: "Good job Jane!",
						},
					],
				},
			],
		},
	]);
});
