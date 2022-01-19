const express = require("express");
require("./src/db/mongoose");
const Product = require("./src/models/product");

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

app.post("/products", async (req, res) => {
	const product = new Product(req.body);

	try {
		await product.save();
		res.status(201).send(product);
	} catch (err) {
		if (err.code === 11000) res.status(400).send(`Product with the name ${req.body.name} already exists`);
		else res.status(500).send(err);
	}
});
app.listen(port, () => {
	console.log(`Server is up and listening on port ${port}`);
});
app.get("/products", async (req, res) => {
	try {
		const products = await Product.find(req.body);
		if (!products) {
			return res.status(404).send();
		}
		res.send(products);
	} catch (err) {
		res.status(500).send();
	}
});
app.get("/products/:id", async (req, res) => {
	const { id } = req.params;
	try {
		const product = await Product.findById(id);
		if (!product) {
			return res.status(404).send();
		}
		res.send(product);
	} catch (err) {
		res.status(500).send();
	}
});
app.put("/products/:id", async (req, res) => {
	const { id } = req.params;
	try {
		const product = await Product.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
		if (!product) {
			return res.status(404).send();
		}
		res.send(product);
	} catch (err) {
		res.status(500).send(err);
	}
});
app.delete("/products/:id", async (req, res) => {
	const { id } = req.params;
	try {
		const product = await Product.findByIdAndDelete(id, { new: true, runValidators: true });
		if (!product) {
			return res.status(404).send();
		}
		res.send(product);
	} catch (err) {
		res.status(500).send(err);
	}
});
app.delete("/products", async (req, res) => {
	const { id } = req.params;
	try {
		const product = await Product.deleteMany({}, { new: true, runValidators: true });
		if (!product) {
			return res.status(404).send();
		}
		res.send(product);
	} catch (err) {
		res.status(500).send(err);
	}
});
