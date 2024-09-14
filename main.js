var roleHarvester = require("role.harvester");
var roleUpgrader = require("role.upgrader");
var roleBuilder = require("role.builder");
var spawner = require("spawner");
var manager = require("creeps.manager");

const creeps = manager.creeps;

module.exports.loop = function () {
	Object.keys(Memory.creeps).forEach((name) => {
		var creep = Game.creeps[name];
		var creepMemory = Memory.creeps[name];
		var role = creepMemory.role;
		
		if (!Game.creeps[name]) {
			delete Memory.creeps[name];
			delete creeps[role].entity[creeps[role].entity.indexOf(creep)];
			console.log("Clearing non-existing creep memory:", name);
		}

		
		if (role in creeps) {
			creeps[role].entity += creep;
			creeps[role].func(creep);
		}

		if (creeps[role].entity.length < creeps[role].amount) {
			spawner.spawn(role);
		}

	});
};
