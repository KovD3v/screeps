var spawner = require("./spawner");
var roles = require("./roles");
const utils = require("./utils");

module.exports.loop = function () {
	for (const creep of Object.values(Game.creeps)) {
		if (creep.ticksToLive === 1) {
			utils.handleCreepDeath(creep)
			continue;
		}

		const role = roles.find((r) => r.name === creep.memory.role.name);
		if (role) {
			role.func(creep);
		} else {
			console.log(`Role ${role} not found.`);
		}
	}

	spawner.autospawn();
};
