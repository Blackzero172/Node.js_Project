const mongoose = require("mongoose");
const dbURL = "mongodb://127.0.0.1:27017/e-commerce";

mongoose.connect(dbURL, { useNewUrlParser: true });
