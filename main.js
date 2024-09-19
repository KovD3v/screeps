var spawner = require("spawner");
var manager = require("roles");

const roles = manager.roles;

module.exports.loop = function () {
	for (const name in Memory.creeps) {
		if (!Game.creeps[name]) {
			delete Memory.creeps[name];
			console.log("Clearing non-existing creep memory:", name);
		}
	}

	for (const source of Object.values(Memory.sources)) {
		source.creeps = source.creeps.filter((name) => Game.creeps[name]);
	}

	for (const creep of Object.values(Game.creeps)) {
		const role = creep.memory.role;

		if (roles[role]) {
			roles[role].func(creep);
		} else {
			console.log("Role not found:", role);
		}
	}

	spawner.spawnByPriority();
};
