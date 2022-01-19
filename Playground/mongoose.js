const mongoose = require("mongoose");
const validator = require("validator");
const dbURL = "mongodb://127.0.0.1/playground";
mongoose.connect(dbURL, {
	useNewUrlParser: true,
});

// const User = mongoose.model("User", {
// 	name: {
// 		type: String,
// 		required: true,
// 		trim: true,
// 	},
// 	age: {
// 		type: Number,
// 		default: 0,
// 		validate(value) {
// 			if (value < 0) throw new Error("Age is negative");
// 		},
// 	},
// 	email: {
// 		type: String,
// 		required: true,
// 		trim: true,
// 		lowercase: true,
// 		validate(value) {
// 			if (!validator.isEmail(value)) throw new Error("Email is invalid");
// 		},
// 	},
// });
// const ppl = new User({
// 	name: "Ali",
// 	age: 19,
// });
// ppl
// 	.save()
// 	.then(() => {
// 		console.log(ppl);
// 	})
// 	.catch((err) => {
// 		console.error(err);
// 	});
const PhoneNumber = mongoose.model("Number", {
	phoneNumber: {
		type: String,
		validate(value) {
			console.log(value.toString());
			if (!validator.isMobilePhone(value.toString(), "he-IL")) throw new Error("Phone Number is Invalid");
		},
	},
});
const Phone = new PhoneNumber({
	phoneNumber: "9505900466",
});
Phone.save()
	.then(() => {
		console.log(Phone);
	})
	.catch((err) => {
		throw new Error(err);
	});
