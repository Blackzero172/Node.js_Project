const mongoose = require("mongoose");
const validator = require("validator");

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
		default: true,
	},
	details: {
		type: detailsSchema,
	},
});
module.exports = Product;
