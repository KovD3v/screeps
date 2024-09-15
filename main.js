var spawner = require("spawner");
var manager = require("roles");

const roles = manager.roles;

module.exports.loop = function () {
	Object.keys(Game.creeps).forEach((name) => {
		var creep = Game.creeps[name];
		var role = creep.memory.role;

		if (!Game.creeps[name]) {
			delete Memory.creeps[name];
			console.log("Clearing non-existing creep memory:", name);
		}

		if (role in roles) {
			roles[role].func(creep);
		} else {
			console.log("Role not found:", role);
		}
	});
	Object.keys(roles).forEach((role) => {
		role = roles[role];
		if (role.counter() < role.amount) {
			spawner.spawn(role);
		}
	});
};
