var roleHarvester = require("role.harvester");
var roleUpgrader = require("role.upgrader");
var roleBuilder = require("role.builder");
var spawner = require("spawner");
var manager = require("creeps.manager");

const creeps = manager.creeps;

module.exports.loop = function () {
	Object.keys(Game.creeps).forEach((name) => {
		var creep = Game.creeps[name];
		var creepMemory = Memory.creeps[name];
		var role = creepMemory.role;

		if (!Game.creeps[name]) {
			delete Memory.creeps[name];
			console.log("Clearing non-existing creep memory:", name);
		}

		if (role in creeps) {
			creeps[role].counter += 1;
			creeps[role].func(creep);
		}
	});
	for (e in creeps) {
		var creep = creeps[e];
		if (creep.counter < creep.amount) {
			spawner.spawn(e);
		}
	}
};
