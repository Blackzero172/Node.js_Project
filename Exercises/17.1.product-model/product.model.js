const mongoose = require("mongoose");
const validator = require("validator");
const dbURL = "mongodb://127.0.0.1:27017/e-commerce";

mongoose.connect(dbURL, { useNewUrlParser: true });
const detailsSchema = new mongoose.Schema({
	description: {
		type: String,
		minlength: 10,
		required: true,
	},
	price: {
		type: Number,
		min: 0,
		required: true,
	},
	discount: {
		type: Number,
		default: 0,
	},
	images: {
		type: Array,
		validate(value) {
			if (value.length < 2) throw new Error("Array must contain at least 2 images");
			else {
				value.forEach((image) => {
					if (!validator.isURL(image)) throw new Error("Array must only contains URL to images");
				});
			}
		},
	},
	phoneNumber: {
		type: String,
		validate(value) {
			if (!validator.isMobilePhone(value, "he-IL")) throw new Error("Phone Number is Invalid");
		},
	},
	dateAdded: {
		type: Date,
		default: new Date(),
	},
});
const Product = mongoose.model("Product", {
	name: {
		type: String,
		required: true,
		unique: true,
	},
	category: {
		type: String,
		required: true,
	},
	isActive: {
		type: Boolean,
	},
	details: {
		type: detailsSchema,
	},
});
// const Car = new Product({
// 	name: "McLaren 520T",
// 	category: "Cars",
// 	isActive: true,
// 	details: {
// 		description: "The Fastest Car in the World",
// 		price: 50000,
// 		images: ["123", "123"],
// 		phoneNumber: "0549334817",
// 	},
// });
// Car.save()
// 	.then(() => {
// 		console.log(Car);
// 	})
// 	.catch((err) => {
// 		throw new Error(err);
// 	});
const PC = new Product({
	name: "a Gaming PC",
	category: "Computers",
	isActive: false,
	details: {
		description: "The Best Gaming Computer in the Market",
		price: 3000,
		images: [
			"https://m.media-amazon.com/images/I/61SIg1UXFyS._SL1500_.jpg",
			"https://m.media-amazon.com/images/I/61SIg1UXFyS._SL1500_.jpg",
		],
		phoneNumber: "0505900466",
	},
});
PC.save()
	.then(() => {
		console.log(PC);
	})
	.catch((err) => {
		throw new Error(err);
	});
