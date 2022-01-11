const yargs = require("yargs");
const fs = require("fs");
const uniqid = require("uniqid");

yargs.command({
	command: "add",
	describe: "Add a user",
	builder: {
		name: {
			describe: "Name of the User",
			demandOption: true,
			type: "string",
		},
		email: {
			describe: "Email of the User",
			demandOption: true,
			type: "string",
		},
	},
	handler: function ({ name, email }) {
		addUser(name, email);
	},
});
yargs.command({
	command: "remove",
	describe: "Remove a user",
	builder: {
		id: {
			describe: "ID of the user",
			demandOption: true,
			type: "string",
		},
	},
	handler: function ({ id }) {
		removeUser(id);
	},
});
const addUser = (name, email) => {
	const users = getUsers();

	users.push({
		id: uniqid(),
		name,
		email,
	});
	console.log("Added User Successfully");
	saveUsers(users);
};
const removeUser = (id) => {
	const users = getUsers();

	const user = users.find((user) => user.id === id);
	if (!user) {
		console.log("Couldn't find User");
	} else {
		console.log("Removed User Successfully");
		users.splice(users.indexOf(user), 1);
	}

	saveUsers(users);
};
const getUsers = () => {
	try {
		const dataBuffer = fs.readFileSync("users.json");
		const dataJSON = dataBuffer.toString();
		return JSON.parse(dataJSON);
	} catch (e) {
		return [];
	}
};
const saveUsers = (users) => {
	const dataJSON = JSON.stringify(users);
	fs.writeFileSync("users.json", dataJSON);
};
yargs.parse();
