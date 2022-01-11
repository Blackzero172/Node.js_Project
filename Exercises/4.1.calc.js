const yargs = require("yargs");

yargs.command({
	command: "add",
	describe: "Add 2 Numbers Together",
	builder: {
		num1: {
			describe: "First Number",
			demandOption: true,
			type: "number",
		},
		num2: {
			describe: "Second Number",
			demandOption: true,
			type: "number",
		},
	},
	handler: function ({ num1, num2 }) {
		console.log(`${num1} + ${num2} = ${num1 + num2}`);
	},
});
yargs.command({
	command: "subtract",
	describe: "Subtract 2 Numbers from each other",
	builder: {
		num1: {
			describe: "First Number",
			demandOption: true,
			type: "number",
		},
		num2: {
			describe: "Second Number",
			demandOption: true,
			type: "number",
		},
	},
	handler: function ({ num1, num2 }) {
		console.log(`${num1} - ${num2} = ${num1 - num2}`);
	},
});
yargs.command({
	command: "multi",
	describe: "Multiply 2 Numbers together",
	builder: {
		num1: {
			describe: "First Number",
			demandOption: true,
			type: "number",
		},
		num2: {
			describe: "Second Number",
			demandOption: true,
			type: "number",
		},
	},
	handler: function ({ num1, num2 }) {
		console.log(`${num1} * ${num2} = ${num1 * num2}`);
	},
});
yargs.command({
	command: "pow",
	describe: "Power a number",
	builder: {
		num1: {
			describe: "First Number",
			demandOption: true,
			type: "number",
		},
	},
	handler: function ({ num1 }) {
		console.log(`${num1}^2 = ${num1 * num1}`);
	},
});

yargs.parse();
