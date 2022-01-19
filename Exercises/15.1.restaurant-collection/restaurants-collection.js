const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const dbURL = "mongodb://127.0.0.1:27017";
const dbName = "findMyRestaurant";

MongoClient.connect(dbURL, { useNewUrlParser: true }, async (err, client) => {
	if (err) {
		return console.log(err);
	}
	const db = client.db(dbName);
	db.collection("restaurants").insertMany([
		{
			name: "El Professor",
			address: {
				city: "New York",
				street: "Wall Street 5",
				coords: [-77, 564, 40.677],
			},
			cuisine: "Spanish",
			kosher: false,
			reviews: [
				{
					date: "5/5/2020",
					score: 5,
				},
				{
					date: "6/5/2020",
					score: 5,
				},
				{
					date: "7/5/2020",
					score: 5,
				},
			],
		},
		{
			name: "Mama Mia",
			address: {
				city: "New York",
				street: "Wall Street 6",
				coords: [-77, 564, 40.677],
			},
			cuisine: "Italian",
			kosher: true,
			reviews: [
				{
					date: "8/5/2020",
					score: 5,
				},
				{
					date: "9/5/2020",
					score: 5,
				},
				{
					date: "10/5/2020",
					score: 5,
				},
			],
		},
		{
			name: "McDonalds",
			address: {
				city: "Los Angeles",
				street: "Wall Street 7",
				coords: [-77, 564, 40.677],
			},
			cuisine: "NA",
			kosher: true,
			reviews: [
				{
					date: "12/5/2020",
					score: 5,
				},
				{
					date: "13/5/2020",
					score: 5,
				},
				{
					date: "14/5/2020",
					score: 5,
				},
			],
		},
		{
			name: "Burger King",
			address: {
				city: "Los Angeles",
				street: "Wall Street 8",
				coords: [-77, 564, 40.677],
			},
			cuisine: "NA",
			kosher: true,
			reviews: [
				{
					date: "15/5/2020",
					score: 5,
				},
				{
					date: "16/5/2020",
					score: 5,
				},
				{
					date: "17/5/2020",
					score: 5,
				},
			],
		},
		{
			name: "Wendy's",
			address: {
				city: "Philadelphia",
				street: "Wall Street 9",
				coords: [-77, 564, 40.677],
			},
			cuisine: "NA",
			kosher: true,
			reviews: [
				{
					date: "18/5/2020",
					score: 5,
				},
				{
					date: "19/5/2020",
					score: 5,
				},
				{
					date: "20/5/2020",
					score: 5,
				},
			],
		},
	]);
});
